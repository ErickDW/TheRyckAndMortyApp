import { ResponseRM } from '../../interfaces';
import { CHARACTER1, CHARACTER2 } from './character.mock';
import { EPISODE1, EPISODE2 } from './episode.mock';
import { LOCATIONRM1, LOCATIONRM2 } from './location.mock';

export const RESPONSERM_CHARACTER: ResponseRM = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [
    CHARACTER1,
    CHARACTER2,
    // ...
  ],
};

export const RESPONSERM_LOCATIONRM: ResponseRM = {
  info: {
    count: 126,
    pages: 7,
    next: 'https://rickandmortyapi.com/api/location?page=2',
    prev: null,
  },
  results: [
    LOCATIONRM1,
    LOCATIONRM2,
    // ...
  ],
};

export const RESPONSERM_EPISODE: ResponseRM = {
  info: {
    count: 51,
    pages: 3,
    next: 'https://rickandmortyapi.com/api/episode?page=2',
    prev: null,
  },
  results: [
    EPISODE1,
    EPISODE2,
    // ...
  ],
};
