export interface Country {
  code: string;
  name: string;
  currency: string;
  continent: { name: string };
  languages: { name: string }[];
  capital: string;
}

export interface Continent {
  code: string;
  name: string;
}
