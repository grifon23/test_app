import {
  ImageLibraryOptions,
  launchImageLibrary,
} from "react-native-image-picker";

export const openGalleryPicker = async () => {
  let options: ImageLibraryOptions = {
    mediaType: "photo",
    selectionLimit: 1,
    includeBase64: true,
  };
  const img = await launchImageLibrary(options);
  return img;
};

