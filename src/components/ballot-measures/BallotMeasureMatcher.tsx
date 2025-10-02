// src/components/ballot-measures/BallotMeasureMatcher.tsx

import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, DollarSign, Scale, TrendingUp, FileText } from 'lucide-react';

const sampleMeasure = {
  id: 'florida-amendment-3-2024',
  title: 'Adult Use of Marijuana',
  shortTitle: 'Marijuana Legalization',
  number: '3',
  type: 'constitutional-amendment',
  electionDate: '2024-11-05',
  summary: 'Allows adults 21 and older to possess, purchase, and use marijuana for recreational purposes. Does not allow home cultivation.',
  requirements: { threshold: 60, thresholdType: 'percentage' },
  results: { passed: false, percentFor: 55.9, percentAgainst: 44.1, note: 'Failed to reach 60% threshold' },
  fiscalImpact: {
    summary: 'State gains estimated $195.6 million annually',
    details: ['Sales tax revenue: ~$195.6M per year', 'Reduced law enforcement costs', 'Minimal regulatory costs']
  },
  supportersArguments: [
    { category: 'personal-freedom', title: 'Personal Freedom', argument: 'Adults should have the right to make their own choices.', strength: 'high' },
    { category: 'criminal-justice', title: 'Criminal Justice Reform', argument: 'Reduces unnecessary arrests.', strength: 'high' },
    { category: 'tax-revenue', title: 'Tax Revenue', argument: 'Generates $200M annually for services.', strength: 'medium' }
  ],
  opponentsArguments: [
    { category: 'corporate-monopoly', title: 'Corporate Monopoly', argument: 'Written by dispensaries for their benefit.', strength: 'high' },
    { category: 'public-health', title: 'Public Health', argument: 'Could increase youth use and impaired driving.', strength: 'medium' }
  ],
  questions: [
    {
      id: 'main-position',
      text: 'Should recreational marijuana be legal in Florida for adults 21+?',
      options: [
        { value: 'yes-strongly', label: 'YES - Strongly support' },
        { value: 'yes-reservations', label: 'YES - Support with concerns' },
        { value: 'no-reform', label: 'NO - But support reform' },
        { value: 'no-strongly', label: 'NO - Oppose entirely' }
      ]
    },
    {
      id: 'corporate-control',
      text: 'Does it concern you that dispensary companies wrote this?',
      options: [
        { value: 'major-concern', label: 'Major concern - dealbreaker' },
        { value: 'minor-concern', label: 'Minor concern' },
        { value: 'not-concerned', label: 'Not concerned' }
      ]
    }
  ]
};

const BallotMeasureMatcher = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (currentQuestion < sampleMeasure.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateRecommendation = () => {
    const mainPosition = answers['main-position'];
    const corporateConcern = answers['corporate-control'];
    
    if (mainPosition?.includes('yes') && corporateConcern !== 'major-concern') {
      return { 
        vote: 'YES', 
        confidence: 'high',
        reasoning: 'Your support for legalization outweighs concerns about implementation.'
      };
    } else if (mainPosition?.includes('yes') && corporateConcern === 'major-concern') {
      return { 
        vote: 'CONSIDER', 
        confidence: 'mixed',
        reasoning: 'You support legalization but have serious concerns. Consider if imperfect legalization is better than none.'
      };
    } else {
      return { 
        vote: 'NO', 
        confidence: 'high',
        reasoning: 'Your answers indicate you oppose this amendment.'
      };
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
                Amendment {sampleMeasure.number}: {sampleMeasure.shortTitle}
              </h1>
              <p className="text-gray-700 mb-3">{sampleMeasure.summary}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>📅 {new Date(sampleMeasure.electionDate).toLocaleDateString()}</span>
                <span>📊 Requires {sampleMeasure.requirements.threshold}% to pass</span>
                <span>🏛️ Constitutional Amendment</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`rounded-lg shadow-lg p-6 mb-6 ${
          recommendation.vote === 'YES' ? 'bg-green-50 border-4 border-green-500' :
          recommendation.vote === 'NO' ? 'bg-red-50 border-4 border-red-500' :
          'bg-yellow-50 border-4 border-yellow-500'
        }`}>
          <div className="flex items-start">
            {recommendation.vote === 'YES' ? <CheckCircle className="w-10 h-10 text-green-600 mr-4 flex-shrink-0" /> :
             recommendation.vote === 'NO' ? <XCircle className="w-10 h-10 text-red-600 mr-4 flex-shrink-0" /> :
             <AlertCircle className="w-10 h-10 text-yellow-600 mr-4 flex-shrink-0" />}
            <div>
              <h2 className="text-3xl font-bold mb-3">
                Based on your answers: Vote {recommendation.vote}
              </h2>
              <p className="text-lg text-gray-800 mb-2">{recommendation.reasoning}</p>
              <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium">
                Confidence: {recommendation.confidence}
              </span>
            </div>
          </div>
        </div>

        {sampleMeasure.results && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              Election Results
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="font-medium">YES votes:</span>
                <span className="text-green-700 font-bold text-xl">{sampleMeasure.results.percentFor}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                <span className="font-medium">NO votes:</span>
                <span className="text-red-700 font-bold text-xl">{sampleMeasure.results.percentAgainst}%</span>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded border-l-4 border-gray-500">
                <p className="text-sm text-gray-800">
                  <strong>Result:</strong> {sampleMeasure.results.passed ? '✓ PASSED' : '✗ FAILED'} - {sampleMeasure.results.note}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <DollarSign className="w-6 h-6 mr-2 text-green-600" />
            Fiscal Impact
          </h3>
          <p className="text-gray-900 font-medium mb-4 text-lg">{sampleMeasure.fiscalImpact.summary}</p>
          <ul className="space-y-2">
            {sampleMeasure.fiscalImpact.details.map((detail, idx) => (
              <li key={idx} className="text-gray-700 flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 flex items-center text-green-700">
            <CheckCircle className="w-6 h-6 mr-2" />
            Arguments in Favor
          </h3>
          <div className="space-y-4">
            {sampleMeasure.supportersArguments.map((arg, idx) => (
              <div key={idx} className="border-l-4 border-green-400 pl-4 py-2">
                <h4 className={`font-semibold mb-1 ${getStrengthColor(arg.strength)}`}>
                  {arg.title}
                </h4>
                <p className="text-gray-700">{arg.argument}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-red-500">
          <h3 className="text-xl font-bold mb-4 flex items-center text-red-700">
            <XCircle className="w-6 h-6 mr-2" />
            Arguments Against
          </h3>
          <div className="space-y-4">
            {sampleMeasure.opponentsArguments.map((arg, idx) => (
              <div key={idx} className="border-l-4 border-red-400 pl-4 py-2">
                <h4 className={`font-semibold mb-1 ${getStrengthColor(arg.strength)}`}>
                  {arg.title}
                </h4>
                <p className="text-gray-700">{arg.argument}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FileText className="w-6 h-6 mr-2 text-blue-600" />
            Your Answers
          </h3>
          <div className="space-y-4">
            {sampleMeasure.questions.map((q) => (
              <div key={q.id} className="pb-4 border-b border-gray-200 last:border-0">
                <p className="font-medium text-gray-900 mb-2">{q.text}</p>
                <p className="text-gray-600 bg-blue-50 px-3 py-2 rounded">
                  {q.options.find(opt => opt.value === answers[q.id])?.label || 'Not answered'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium shadow"
          >
            Print Results
          </button>
        </div>
      </div>
    );
  }

  const question = sampleMeasure.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / sampleMeasure.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Amendment {sampleMeasure.number}: {sampleMeasure.shortTitle}
          </h1>
          <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full shadow">
            Question {currentQuestion + 1} of {sampleMeasure.questions.length}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
        <p className="text-gray-800">{sampleMeasure.summary}</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.id, option.value)}
              className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <span className="text-gray-900 font-medium group-hover:text-blue-700">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium hover:bg-white rounded transition-colors"
          >
            ← Previous
          </button>
        )}
        <div className="ml-auto text-sm text-gray-500 bg-white px-3 py-1 rounded shadow">
          {Object.keys(answers).length} of {sampleMeasure.questions.length} answered
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xs text-gray-600 mb-1">Election Date</div>
          <div className="font-semibold text-gray-900">
            {new Date(sampleMeasure.electionDate).toLocaleDateString()}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xs text-gray-600 mb-1">Type</div>
          <div className="font-semibold text-gray-900">Constitutional Amendment</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xs text-gray-600 mb-1">Threshold</div>
          <div className="font-semibold text-gray-900">
            {sampleMeasure.requirements.threshold}% required
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallotMeasureMatcher;