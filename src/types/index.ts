// src/types/index.ts

// Define a specific type for question options
export interface QuestionOption {
  value: string;
  label: string;
}

// Update the main Question interface to be reusable
export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
  // These properties can be optional if not all questions use them
  category?: string;
  order?: number;
  active?: boolean;
  proVoteAnswer?: string; // For ballot measure logic
}

export interface Candidate {
  id:string;
  name: string;
  district: string;
  position: string;
  background: string;
  positions: any; // Maps question IDs to answer values
  // Optional properties
  term?: string;
  photo?: string;
  website?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ElectionConfig {
  id: string;
  state: string;
  county: string;
  office: string;
  title: string;
  description: string;
  electionDate: string;
  questions: Question[]; // Uses the updated Question interface
  candidates: Candidate[];
}

export interface Argument {
  title: string;
  argument: string;
  strength: 'high' | 'medium' | 'low';
  category: string;
}

export interface BallotMeasureConfig {
  id: string;
  number: number;
  shortTitle: string;
  summary: string;
  electionDate: string;
  questions: Question[]; // Now uses the updated Question interface
  requirements: { threshold: number };
  fiscalImpact?: { summary: string; details: string[] };
  supportersArguments?: Argument[];
  opponentsArguments?: Argument[];
  results?: any;
}