import { IFile } from "../../typing/interfaces/file.interface"

export interface IPayloadAnimal {
  id?:number
  title?: string
  text?: string
  image?: any
  url?: string 
  active?: number| null;
};
