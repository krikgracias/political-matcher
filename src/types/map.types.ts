// src/types/map.types.ts
export interface LocationSelection {
  state: string;
  county: string;
  viewMode?: string;
}

export interface CountyData {
  elections: number;
  name: string;
}

export type CountiesWithData = Record<string, CountyData>;