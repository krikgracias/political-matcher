export interface Question {
  id: string;
  category: string;
  text: string;
  options: { value: string; label: string }[];
  order: number;
  active: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  district: string;
  position: string;
  background: string;
  positions: { [key: string]: string };
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