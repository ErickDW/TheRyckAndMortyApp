export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Adicionals;
  location: Adicionals;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Adicionals {
  name: string;
  url: string;
}
