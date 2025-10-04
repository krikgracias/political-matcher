import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, DollarSign, Scale, TrendingUp, FileText } from 'lucide-react';
import type { BallotMeasureConfig } from '../../types';

// // 1. DEFINED TYPESCRIPT INTERFACES for type safety and autocompletion
// interface Argument {
//   title: string;
//   argument: string;
//   strength: 'high' | 'medium' | 'low';
// }

// interface QuestionOption {
//   value: string;
//   label: string;
// }

// interface Question {
//   id: string;
//   text: string;
//   options: QuestionOption[];
//   proVoteAnswer: string; // The answer value that aligns with a "YES" vote
// }

// interface BallotMeasureConfig {
//   id: string;
//   number: number;
//   shortTitle: string;
//   summary: string;
//   electionDate: string;
//   requirements: { threshold: number };
//   results?: { passed: boolean; percentFor: number; percentAgainst: number; note: string; };
//   fiscalImpact?: { summary: string; details: string[] };
//   supportersArguments?: Argument[];
//   opponentsArguments?: Argument[];
//   questions: Question[];
// }

interface BallotMeasureMatcherProps {
  config: BallotMeasureConfig;
}

const BallotMeasureMatcher = ({ config }: BallotMeasureMatcherProps) => {
  // 2. ADDED INITIAL DATA CHECK to prevent crashes from invalid data
  if (!config || !config.questions || config.questions.length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-xl font-semibold text-red-600">Configuration Error</h2>
        <p className="text-gray-700 mt-2">The data for this ballot measure is missing or incomplete.</p>
      </div>
    );
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (currentQuestion < config.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  // 3. REWROTE RECOMMENDATION LOGIC to be generic and reusable
  const calculateRecommendation = () => {
    let proMeasureScore = 0;
    const totalQuestions = config.questions.length;

    config.questions.forEach(question => {
      if (answers[question.id] === question.proVoteAnswer) {
        proMeasureScore++;
      }
    });

    const matchPercentage = totalQuestions > 0 ? (proMeasureScore / totalQuestions) * 100 : 0;

    if (matchPercentage > 65) {
      return { vote: 'YES', reasoning: 'Your answers strongly align in favor of this measure.' };
    } else if (matchPercentage > 35) {
      return { vote: 'CONSIDER', reasoning: 'Your answers show a mixed alignment. Review the arguments to make a final decision.' };
    } else {
      return { vote: 'NO', reasoning: 'Your answers strongly align against this measure.' };
    }
  };

  const getStrengthColor = (strength: string) => {
    if (strength === 'high') return 'text-red-600 font-semibold';
    if (strength === 'medium') return 'text-orange-500';
    return 'text-gray-600';
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = calculateRecommendation();
    
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-start mb-4">
            <Scale className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Amendment {config.number}: {config.shortTitle}
              </h1>
              <p className="text-gray-700 mb-3">{config.summary}</p>
            </div>
          </div>
        </div>

        {/* Recommendation Block */}
        <div className={`rounded-lg shadow-lg p-6 mb-6 ${
          recommendation.vote === 'YES' ? 'bg-green-50 border-4 border-green-500' :
          recommendation.vote === 'NO' ? 'bg-red-50 border-4 border-red-500' :
          'bg-yellow-50 border-4 border-yellow-500'
        }`}>
          <h2 className="text-3xl font-bold mb-3">Based on your answers: Vote {recommendation.vote}</h2>
          <p className="text-lg text-gray-800">{recommendation.reasoning}</p>
        </div>
        
        {/* 4. ADDED DEFENSIVE RENDERING CHECKS to prevent crashes */}
        {config.fiscalImpact && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center"><DollarSign className="w-6 h-6 mr-2 text-green-600" />Fiscal Impact</h3>
              <p className="text-gray-900 font-medium mb-4 text-lg">{config.fiscalImpact.summary}</p>
              <ul className="space-y-2">
                {config.fiscalImpact.details?.map((detail, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span><span>{detail}</span></li>
                ))}
              </ul>
            </div>
        )}

        {config.supportersArguments && config.supportersArguments.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-4 flex items-center text-green-700"><CheckCircle className="w-6 h-6 mr-2" />Arguments in Favor</h3>
            {config.supportersArguments.map((arg, idx) => (
              <div key={idx} className="border-l-4 border-green-400 pl-4 py-2 mb-4">
                <h4 className={`font-semibold mb-1 ${getStrengthColor(arg.strength)}`}>{arg.title}</h4>
                <p className="text-gray-700">{arg.argument}</p>
              </div>
            ))}
          </div>
        )}

        {config.opponentsArguments && config.opponentsArguments.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-red-500">
            <h3 className="text-xl font-bold mb-4 flex items-center text-red-700"><XCircle className="w-6 h-6 mr-2" />Arguments Against</h3>
            {config.opponentsArguments.map((arg, idx) => (
              <div key={idx} className="border-l-4 border-red-400 pl-4 py-2 mb-4">
                <h4 className={`font-semibold mb-1 ${getStrengthColor(arg.strength)}`}>{arg.title}</h4>
                <p className="text-gray-700">{arg.argument}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          <button onClick={resetQuiz} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Retake Quiz</button>
        </div>
      </div>
    );
  }

  const question = config.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / config.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Amendment {config.number}: {config.shortTitle}</h1>
            <div className="w-full bg-gray-200 rounded-full h-3"><div className="bg-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }}/></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{question.text}</h2>
            <div className="space-y-3">
                {question.options.map((option) => (
                    <button key={option.value} onClick={() => handleAnswer(question.id, option.value)} className="w-full text-left p-4 rounded-lg border-2 hover:border-blue-500 transition-all">
                        <span className="text-gray-900 font-medium">{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    </div>
  );
};

export default BallotMeasureMatcher;