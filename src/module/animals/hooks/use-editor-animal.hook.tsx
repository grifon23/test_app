import {useForm} from 'jet-tools';
import _ from 'lodash';
import React, {useCallback, useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {
  getDetailedAnimalReq,
  storeNewAnimalReq,
  updateAnimalReq,
} from '../../../api/animals';
import {IAnimal} from '../../../typing/interfaces/entity/animals';
import {IFile} from '../../../typing/interfaces/file.interface';
import {openGalleryPicker} from '../../services/system/media.service';
import {editorAnimalValidator} from '../validator/editor-animal.validator';

interface IForm {
  name: string;
  description: string;
  imgUrl?: string;
}

export const useEditorAnimal = (existId: number) => {
  const form = useForm<IForm>({}, editorAnimalValidator);
  const [animal, setAnimal] = useState({} as IAnimal);
  const [image, setImage] = useState({} as IFile);
  const [isLoading, setIsLoading] = useState(false);

  const loadAnimal = async (id: number) => {
    setIsLoading(true);
    try {
      const {data} = await getDetailedAnimalReq(id);
      setAnimal(data);
    } catch (error) {
      console.log('error editor hook', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadAnimal(existId);
  }, [existId]);

  useEffect(() => {
    if (isLoading) return;
    form.set({
      name: animal?.title,
      description: animal?.text,
      imgUrl: animal?.image,
    });
  }, [existId, animal, isLoading]);

  const updateAnimal = async () => {
    try {
      const saveData = {
        title: form.values.name,
        text: form.values.description,
        id: animal?.id,
        // image: image,
        // ------  temporary solution
        image: animal.image,
        url: image.uri,
        active: animal?.active,
        // ------   temporary solution
      };
      await updateAnimalReq(saveData, existId);
    } catch (error: any) {
      console.log('error update', error.response.data);
    }
  };

  const choseImageFromLibbrary = useCallback(async () => {
    try {
      const {assets}: any = await openGalleryPicker();
      setImage(assets[0]);
      form.setField('imgUrl', assets[0].uri);
    } catch (error) {}
  }, []);

  const storeAnimal = async () => {
    try {
      // ------ temporary solution
      // if (!_.isEmpty(image)) {
      const saveData = {
        title: form.values.name,
        text: form.values.description,
        // image: image,
        image: 'https://yourtestapi.com/img/bird1.jpg',
        url: 'https://yourtestapi.com/img/bird1.jpg',
        active: 1,
      };
      await storeNewAnimalReq(saveData);
      // }
      // ------ temporary solution
    } catch (error) {
      console.log('error store', error);
    }
  };

  const submit = () => {
    if (existId) {
      updateAnimal();
    } else storeAnimal();
    Keyboard.dismiss();
  };

  const onChange = (field: keyof IForm, val: string) => {
    form.setField(field, val);
  };
  return {
    submit: () => form.onSubmit(submit),
    errors: form.errors,
    values: form.values,
    onChange,
    choseImageFromLibbrary,
    image,
  };
};
