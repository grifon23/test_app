export interface IAnimal {
  id: string;
  title: string;
  text: string;
  image: string;
  url: string;
}
export interface Animals extends Array<IAnimal> {}
