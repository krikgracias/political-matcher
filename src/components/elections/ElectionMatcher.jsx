import { useState } from 'react';
import { calculateAllMatches } from '../../utils/matching.js';

function ElectionMatcher({ config, onBack }) {
  if (!config || !config.questions || !config.candidates) {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-10 text-center">
        <h2 className="text-xl text-red-500">Configuration Error</h2>
        <p>The data for this election is incomplete.</p>
      </div>
    );
  }

  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = config.questions[currentIndex];
  const isLastQuestion = currentIndex === config.questions.length - 1;

  // Navigation handlers
  const handleBackToHome = () => {
    if (window.confirm('Are you sure you want to leave? Your progress will be lost.')) {
      if (onBack) {
        onBack();
      } else {
        window.location.href = '/';
      }
    }
  };

  const handleBackToCounty = () => {
    if (window.confirm('Are you sure you want to leave? Your progress will be lost.')) {
      if (onBack) {
        onBack();
      } else {
        window.history.back();
      }
    }
  };

  const handleAnswer = (answer) => {
    const newAnswers = { ...userAnswers, [currentQuestion.id]: answer };
    setUserAnswers(newAnswers);

    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (showResults) {
    const matchResults = calculateAllMatches(userAnswers, config.candidates);
    return (
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Buttons for Results Page */}
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
          </div>

          <h1 className="text-4xl font-bold text-center mb-2">{config.title} - Your Results</h1>
          <p className="text-center text-gray-400 mb-8">You answered: {Object.keys(userAnswers).length} questions</p>
          <h2 className="text-3xl font-bold mb-4">Your Best Matches:</h2>
          {matchResults.map((result, index) => (
            <div 
              key={result.candidate.id} 
              className={`border rounded-lg p-6 my-6 ${
                index === 0 
                  ? 'bg-green-900/50 border-green-500' 
                  : 'bg-gray-800 border-gray-700'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">
                {index + 1}. {result.candidate.name} 
                <span className={`font-bold ${index === 0 ? 'text-green-400' : 'text-white'}`}>
                  {' '} - {result.matchPercentage}% Match
                </span>
              </h3>
              <p className="text-gray-300 my-2"><strong className="text-gray-100">District:</strong> {result.candidate.district}</p>
              <p className="text-gray-300 my-2"><strong className="text-gray-100">Position:</strong> {result.candidate.position}</p>
              <p className="text-gray-300 my-4">{result.candidate.background}</p>
              <p className="text-gray-400 italic text-sm mt-4">You agreed on {result.matches} out of {result.totalQuestions} issues</p>
            </div>
          ))}
          <div className="text-center mt-8">
            <button 
              onClick={() => { setShowResults(false); setUserAnswers({}); setCurrentIndex(0); }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Questionnaire view with navigation
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
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
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 
                       transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Elections
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">{config.title}</h1>
        <p className="text-center text-gray-400 mb-8">{config.description}</p>
        
        <div className="max-w-3xl mx-auto p-4">
          <h2 className="text-xl font-bold text-gray-300 mb-2">Question {currentIndex + 1} of {config.questions.length}</h2>
          <h3 className="text-2xl font-semibold text-white mb-6">{currentQuestion.text}</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map(option => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
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
}

export default ElectionMatcher;