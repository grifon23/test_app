import validate from "validate.js"


export const presence = {
  allowEmpty: false,
  message: "^Це поле обов'язкове",
};

const contrains = {
  name:{presence}, 
  description: { presence }
 }

export const editorAnimalValidator = (data: any) => {

return validate(data, contrains)
}