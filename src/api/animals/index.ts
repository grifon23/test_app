import axios from 'axios';
import config from '../../config';
import { IPayloadAnimal } from './interfaces';

export const getListAnimalsReq = async () => {
  return await axios.get(config.BASE_URL);
};

export const getDetailedAnimalReq = async (id: number) => {
  return await axios.get(`${config.BASE_URL}/${id}`);
};
export const storeNewAnimalReq = async (data: IPayloadAnimal) => {
  return await axios.post(`${config.BASE_URL}`, data);
};
export const updateAnimalReq = async (data: IPayloadAnimal, id: number) => {
  return await axios.put(`${config.BASE_URL}/${id}`, data);
};
export const removeAnimalReq = async (id:number) => {
  return axios.delete(`${config.BASE_URL}/${id}`)
}