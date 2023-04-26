export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image: string;
  episode?: string[];
  url?: string;
  created: string;
}

export interface IFormData {
  name: string;
  gender: string;
  status: string;
  species: string;
  created: string;
  image: FileList;
  agreement: boolean;
}

export enum Routes {
  HOME = '/',
  ABOUT = '/about',
  FORMS = '/forms',
}
