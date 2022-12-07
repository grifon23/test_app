import {useForm} from 'jet-tools';
import React, {useEffect, useState} from 'react';
import {
  getDetailedAnimalReq,
  storeNewAnimalReq,
  updateAnimalReq,
} from '../../../api/animals';
import {IAnimal} from '../../../typing/entity/animals';
import {editorAnimalValidator} from '../validator/editor-animal.validator';

interface IForm {
  name: string;
  description: string;
  imgUrl?: string;
}
let id = 2;
export const useEditorAnimal = (existId: number) => {
  const form = useForm<IForm>({}, editorAnimalValidator);
  const [animal, setAnimal] = useState<IAnimal>();

  const loadAnimal = async (id: number) => {
    try {
      const {data} = await getDetailedAnimalReq(id);
      console.log('data up', data);
      setAnimal(data);
      form.set({
        name: data.title,
        description: data.text,
        imgUrl: data.image,
      });
    } catch (error) {
      console.log('error editor hook', error);
    }
  };

  useEffect(() => {
    loadAnimal(existId);
  }, [existId]);

  const updateAnimal = async () => {
    const saveData = {
      title: form.values.name,
      text: form.values.description,
      id: animal?.id,
      image: animal?.image,
      url: animal?.url,
      active: animal?.active,
    };
    // console.log('update', saveData);
    await updateAnimalReq(saveData, existId);
  };

  const storeAnimal = async () => {
    const saveData = {
      title: form.values.name,
      text: form.values.description,
    };
    await storeNewAnimalReq(saveData);
  };

  const submit = () => {
    if (existId) {
      updateAnimal();
    } else storeAnimal();
  };

  const onChange = (field: keyof IForm, val: string) => {
    form.setField(field, val);
  };
  return {
    submit: () => form.onSubmit(submit),
    errors: form.errors,
    values: form.values,
    onChange,
  };
};
