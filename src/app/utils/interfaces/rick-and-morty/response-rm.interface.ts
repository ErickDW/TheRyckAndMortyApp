import { Character } from './character.interface';
import { Episode } from './episode.interface';
import { LocationRM } from './location-rm.interface';

export interface ResponseRM {
  info: Info;
  results: Character[] | Episode[] | LocationRM[];
  status?: number;
}

export interface Info {
  count?: number;
  pages?: number;
  next: string | null;
  prev?: any;
}
