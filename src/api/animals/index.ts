import axios from 'axios';
import config from '../../config';

export const getListAnimalsReq = async () => {
  return await axios.get(config.BASE_URL);
};

export const getDetailedAnimalReq = async (id: number) => {
  return await axios.get(`${config.BASE_URL}/${id}`);
};
export const postNewAnimalReq = async (data: any) => {
  return await axios.post(`${config.BASE_URL}`, {data});
};
export const putAnimalReq = async (data: any, id: number) => {
  return await axios.put(`${config.BASE_URL}/${id}`, {data});
};
