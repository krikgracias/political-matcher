// src/types/index.ts

export interface QuestionOption {
  readonly value: string;
  readonly label: string;
}

export interface Question {
  readonly id: string;
  readonly text: string;
  readonly options: readonly QuestionOption[]; // ✅ Add readonly here
  readonly category?: string;
  readonly order?: number;
  readonly active?: boolean;
  readonly proVoteAnswer?: string;
}

export interface Candidate {
  readonly id:string;
  readonly name: string;
  readonly district: string;
  readonly position: string;
  readonly background: string;
  readonly positions: any; 
  readonly term?: string;
  readonly photo?: string;
  readonly website?: string;
  readonly email?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface ElectionConfig {
  readonly id: string;
  readonly state: string;
  readonly county: string;
  readonly office: string;
  readonly title: string;
  readonly description: string;
  readonly electionDate: string;
  readonly questions: readonly Question[];
  readonly candidates: readonly Candidate[];
}

export interface Argument {
  readonly title: string;
  readonly argument: string;
  readonly strength: 'high' | 'medium' | 'low';
  readonly category: string;
}

export interface BallotMeasureConfig {
  readonly id: string;
  readonly number: number;
  readonly shortTitle: string;
  readonly summary: string;
  readonly electionDate: string;
  readonly questions: readonly Question[]; 
  readonly requirements: { readonly threshold: number };
  readonly fiscalImpact?: { 
    readonly summary: string; 
    readonly details: readonly string[] 
  };
  readonly supportersArguments?: readonly any[]; 
  readonly opponentsArguments?: readonly any[];
  readonly results?: any;
}