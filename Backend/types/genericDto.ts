export type genericDto = {
  response: boolean | string | number;
};

export type Locations = {
  id: number;
  name: string
}

export type Classifications = {
  id: number;
  name: string
}

export type Jobs = {
  id: number;
  name: string;
  classification: number;
  location: number;
  headline: string
  description: string,
  date_added: string
}

