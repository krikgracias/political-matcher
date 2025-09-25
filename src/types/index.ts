export interface Question {
  id: string;
  category: string;
  text: string;
  options: any[];
  order: number;
  active: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  district: string;
  position: string;
  term?: string;
  background: string;
  positions: any;
}

export interface ElectionConfig {
  id: string;
  state: string;
  county: string;
  office: string;
  title: string;
  description: string;
  electionDate: string;
  questions: Question[];
  candidates: Candidate[];
}