import { Character } from "./character.interface"
import { Episode } from "./episode.interface"
import { LocationRM } from "./location-rm.interface";


export interface ResponseRM {
  info: Info;
  results: Character[] | Episode[] | LocationRM[];
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}
