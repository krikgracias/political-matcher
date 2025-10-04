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
  photo?: string;
  website?: string;
  email?: string;
  positions: any;
  createdAt: Date;
  updatedAt: Date;
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

export interface BallotMeasureConfig {
  id: string;
  number: number;
  shortTitle: string;
  summary: string;
  electionDate: string;
  questions: any[]; // You can define a more detailed Question type later
  requirements: { threshold: number };
  fiscalImpact?: { summary: string; details: string[] };
  supportersArguments?: { title: string; argument: string; strength: string }[];
  opponentsArguments?: { title: string; argument: string; strength: string }[];
  results?: any;
}