export interface censusData {
  geo: string;
  name: string;
  time: string;
  id: string;
  Population: string;
}

export type Icountry = {
  [key: string]: censusData;
};
