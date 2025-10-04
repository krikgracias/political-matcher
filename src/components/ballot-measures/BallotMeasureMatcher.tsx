import React, { useState } from 'react';
import { CheckCircle, XCircle, DollarSign, Scale } from 'lucide-react';
import type { BallotMeasureConfig } from '../../types';

interface BallotMeasureMatcherProps {
  config: any;
  onBack?: () => void;  // Add this line
}

const BallotMeasureMatcher = ({ config }: BallotMeasureMatcherProps) => {
  // Initial data check to prevent crashes
  if (!config || !config.questions || config.questions.length === 0) {
    return (
      <div className="text-center p-10 bg-gray-900 text-white">
        <h2 className="text-xl font-semibold text-red-500">Configuration Error</h2>
        <p className="text-gray-400 mt-2">The data for this ballot measure is missing or incomplete.</p>
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
    if (strength === 'high') return 'text-red-400 font-semibold';
    if (strength === 'medium') return 'text-orange-400';
    return 'text-gray-400';
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = calculateRecommendation();
    
    return (
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-start mb-4">
              <Scale className="w-8 h-8 text-blue-400 mr-4 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {config.shortTitle}
                </h1>
                <p className="text-gray-300 mb-3">{config.summary}</p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-lg p-6 mb-6 ${
            recommendation.vote === 'YES' ? 'bg-green-900/50 border-2 border-green-500' :
            recommendation.vote === 'NO' ? 'bg-red-900/50 border-2 border-red-500' :
            'bg-yellow-900/50 border-2 border-yellow-500'
          }`}>
            <h2 className="text-3xl font-bold mb-3">Based on your answers: Vote {recommendation.vote}</h2>
            <p className="text-lg text-gray-300">{recommendation.reasoning}</p>
          </div>
          
          {config.fiscalImpact && (
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center"><DollarSign className="w-6 h-6 mr-2 text-green-400" />Fiscal Impact</h3>
              <p className="text-gray-200 font-medium mb-4 text-lg">{config.fiscalImpact.summary}</p>
              <ul className="space-y-2 text-gray-300">
                {config.fiscalImpact.details?.map((detail, idx) => (
                  <li key={idx} className="flex items-start"><span className="text-blue-400 mr-2 mt-1">•</span><span>{detail}</span></li>
                ))}
              </ul>
            </div>
          )}

          {config.supportersArguments && config.supportersArguments.length > 0 && (
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center text-green-400"><CheckCircle className="w-6 h-6 mr-2" />Arguments in Favor</h3>
              {config.supportersArguments.map((arg, idx) => (
                <div key={idx} className="border-l-2 border-green-500 pl-4 py-2 mb-4">
                  <h4 className={`font-semibold mb-1 ${getStrengthColor(arg.strength)}`}>{arg.title}</h4>
                  <p className="text-gray-300">{arg.argument}</p>
                </div>
              ))}
            </div>
          )}

          {config.opponentsArguments && config.opponentsArguments.length > 0 && (
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center text-red-400"><XCircle className="w-6 h-6 mr-2" />Arguments Against</h3>
              {config.opponentsArguments.map((arg, idx) => (
                <div key={idx} className="border-l-2 border-red-500 pl-4 py-2 mb-4">
                  <h4 className={`font-semibold mb-1 ${getStrengthColor(arg.strength)}`}>{arg.title}</h4>
                  <p className="text-gray-300">{arg.argument}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            <button onClick={resetQuiz} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Retake Quiz</button>
          </div>
        </div>
      </div>
    );
  }

  const question = config.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / config.questions.length) * 100;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {config.shortTitle}
          </h1>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }}/>
          </div>
        </div>
        
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Question {currentQuestion + 1} of {config.questions.length}</h2>
          <h3 className="text-2xl font-semibold text-white mb-6">{question.text}</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {question.options.map(option => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option.value)}
                className="block w-full p-4 text-left rounded-lg border border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:border-gray-500 transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallotMeasureMatcher;