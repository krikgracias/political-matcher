// Sample candidate data 
// src/data/sampleCandidates.ts
import { Candidate } from '../types';

export const SAMPLE_CANDIDATES: Candidate[] = [
  {
    id: 'michelle-bonczek',
    name: 'Michelle Bonczek',
    district: 'District 4',
    position: 'current',
    term: '2025-2029',
    background: 'Mother of 7, substitute teacher, Bachelor\'s in Psychology, Master\'s in Education Law. 43 years in Hernando County.',
    positions: {
      schoolSafety: {
        stance: 'strongly-supports',
        confidence: 'high',
        sources: ['Campaign materials'],
        quote: 'Safety should be our number one priority.',
        lastUpdated: new Date('2024-11-01')
      },
      teacherSupport: {
        stance: 'strongly-supports',
        confidence: 'high',
        sources: ['Campaign materials'],
        quote: 'I am running to make changes that will help retain teachers.',
        lastUpdated: new Date('2024-11-01')
      },
      budgetPriorities: {
        stance: 'supports',
        confidence: 'high',
        sources: ['Campaign materials'],
        lastUpdated: new Date('2024-11-01')
      },
      infrastructure: {
        stance: 'supports',
        confidence: 'medium',
        sources: ['Campaign materials'],
        lastUpdated: new Date('2024-11-01')
      },
      academicPrograms: {
        stance: 'supports',
        confidence: 'high',
        sources: ['Campaign materials'],
        lastUpdated: new Date('2024-11-01')
      },
      parentInvolvement: {
        stance: 'strongly-supports',
        confidence: 'high',
        sources: ['Campaign materials'],
        lastUpdated: new Date('2024-11-01')
      },
      specialNeeds: {
        stance: 'strongly-supports',
        confidence: 'high',
        sources: ['Campaign materials'],
        lastUpdated: new Date('2024-11-01')
      }
    },
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-11-01')
  }
];