import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAllMatches } from '../../utils/matching.js';

function ElectionMatcher({ config }) {
  const navigate = useNavigate();

  // Add back navigation handler
  const handleBackToHome = () => {
    if (window.confirm('Are you sure you want to leave? Your progress will be lost.')) {
      navigate('/'); // Goes back to USA map
    }
  };

  const handleBackToCounty = () => {
    if (window.confirm('Are you sure you want to leave? Your progress will be lost.')) {
      navigate(-1); // Goes back one page (to county selection)
    }
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < config.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateMatches = () => {
    // Your existing matching logic
    const matches = config.candidates.map(candidate => {
      let matchScore = 0;
      let totalWeight = 0;

      config.questions.forEach(question => {
        const userAnswer = answers[question.id];
        const candidateAnswer = candidate.positions[question.id];
        const weight = question.weight || 1;

        if (userAnswer && candidateAnswer) {
          if (userAnswer === candidateAnswer) {
            matchScore += weight;
          }
          totalWeight += weight;
        }
      });

      return {
        ...candidate,
        matchPercentage: totalWeight > 0 ? Math.round((matchScore / totalWeight) * 100) : 0
      };
    });

    return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
  };

  if (showResults) {
    const matches = calculateMatches();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="mb-6 flex gap-4">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 
                         transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Map
            </button>
            <button
              onClick={() => setShowResults(false)}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 
                         transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retake Quiz
            </button>
          </div>

          {/* Results Content */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Your Matches</h2>
            <div className="space-y-4">
              {matches.map((candidate, index) => (
                <div 
                  key={candidate.name}
                  className="bg-slate-700 rounded-xl p-6 border-2 border-slate-600"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{candidate.name}</h3>
                      {candidate.party && (
                        <p className="text-slate-400">{candidate.party}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-blue-400">
                        {candidate.matchPercentage}%
                      </div>
                      <div className="text-sm text-slate-400">Match</div>
                    </div>
                  </div>
                  {index === 0 && candidate.matchPercentage > 60 && (
                    <div className="bg-green-500/20 border border-green-500 rounded-lg p-3 text-green-300 text-sm">
                      Top Match! This candidate aligns closely with your priorities.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = config.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / config.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Fixed Navigation Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 
                       transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Map
          </button>
          
          <button
            onClick={handleBackToCounty}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-300 
                       transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Elections
          </button>
        </div>

        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {config.title || 'Election Matcher'}
          </h1>
          <p className="text-slate-400 text-lg">
            {config.description || 'Find candidates who align with your priorities'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">
              Question {currentQuestion + 1} of {config.questions.length}
            </span>
            <span className="text-slate-400 text-sm font-medium">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">
            {question.question}
          </h2>
          
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(question.id, option)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  answers[question.id] === option
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600 hover:border-slate-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[question.id] === option
                      ? 'border-white bg-white'
                      : 'border-slate-400'
                  }`}>
                    {answers[question.id] === option && (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                currentQuestion === 0
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!answers[question.id]}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                !answers[question.id]
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
              }`}
            >
              {currentQuestion === config.questions.length - 1 ? 'See Results' : 'Next'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionMatcher;