export interface FilterCharacter {
  name: string;
  status?: string; // alive | dead | unknown
  species?: string;
  type?: string;
  gender?: string; // female | male | genderless | unknown
}
