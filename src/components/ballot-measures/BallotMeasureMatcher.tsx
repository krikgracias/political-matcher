import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, DollarSign, Scale, TrendingUp, FileText } from 'lucide-react';
import type { BallotMeasureConfig } from '../../types';

// The local interfaces have been removed, as the types are now imported from the central types file.

interface BallotMeasureMatcherProps {
  config: BallotMeasureConfig;
}

const BallotMeasureMatcher = ({ config }: BallotMeasureMatcherProps) => {
  // Initial data check to prevent crashes from invalid props
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
  
  const calculateRecommendation = () => {
    let proMeasureScore = 0;
    const totalQuestions = config.questions.length;

    config.questions.forEach(question => {
      // Assumes your question data in the config has a 'proVoteAnswer' property
      if (answers[question.id] === (question as any).proVoteAnswer) {
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

        <div className={`rounded-lg shadow-lg p-6 mb-6 ${
          recommendation.vote === 'YES' ? 'bg-green-50 border-4 border-green-500' :
          recommendation.vote === 'NO' ? 'bg-red-50 border-4 border-red-500' :
          'bg-yellow-50 border-4 border-yellow-500'
        }`}>
          <h2 className="text-3xl font-bold mb-3">Based on your answers: Vote {recommendation.vote}</h2>
          <p className="text-lg text-gray-800">{recommendation.reasoning}</p>
        </div>
        
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

  const question = config.questions[currentQuestion] as any;
  const progress = ((currentQuestion + 1) / config.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Amendment {config.number}: {config.shortTitle}</h1>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }}/>
        </div>
      </div>
      
      <div style={{ padding: '20px', maxWidth: '600px', backgroundColor: '#FFFFFF', margin: '0 auto' }}>
        <h2 style={{color: '#000000', fontSize: '24px'}}>Question {currentQuestion + 1} of {config.questions.length}</h2>
        <h3 style={{color: '#000000', fontSize: '20px', marginBottom: '20px'}}>{question.text}</h3>
        
        <div>
          {question.options.map((option: { value: string; label: string }) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.id, option.value)}
              style={{
                display: 'block',
                width: '100%',
                padding: '15px',
                margin: '10px 0',
                backgroundColor: '#F0F0F0',
                border: '2px solid #000000',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '16px',
                color: '#000000',
                borderRadius: '5px'
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#E0E0E0')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F0F0F0')}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BallotMeasureMatcher;
