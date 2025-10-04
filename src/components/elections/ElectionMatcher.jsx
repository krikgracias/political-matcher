import { useState } from 'react';
import Questionnaire from './Questionnaire.jsx';
import { calculateAllMatches } from '../../utils/matching.js';

function ElectionMatcher({ config }) {
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  const handleComplete = (answers) => {
    setUserAnswers(answers);
    setShowResults(true);
  };

 if (showResults) {
  const matchResults = calculateAllMatches(userAnswers, config.candidates);
  
  return (
    // Main container with dark background, light text, and padding
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Main title with centered text and spacing */}
        <h1 className="text-4xl font-bold text-center mb-2">
          {config.title} - Your Results
        </h1>
        {/* Subtitle with lighter, centered text */}
        <p className="text-center text-gray-400 mb-8">
          You answered: {Object.keys(userAnswers).length} questions
        </p>
        
        {/* Section header for the matches list */}
        <h2 className="text-3xl font-bold mb-4">Your Best Matches:</h2>
        
        {matchResults.map((result, index) => (
          <div 
            key={result.candidate.id} 
            // Card styling for each result with a dark background and border
            // The top match gets a special green border
            className={`bg-gray-800 border rounded-lg p-6 my-6 ${
              index === 0 ? 'border-green-500' : 'border-gray-700'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">
              {index + 1}. {result.candidate.name} 
              {/* Styling for the match percentage, top match is green */}
              <span className={`font-bold ${
                index === 0 ? 'text-green-400' : 'text-white'
              }`}>
                {' '} - {result.matchPercentage}% Match
              </span>
            </h3>
            
            {/* Candidate details with lighter text color for readability */}
            <p className="text-gray-300 my-2">
              <strong>District:</strong> {result.candidate.district}
            </p>
            <p className="text-gray-300 my-2">
              <strong>Position:</strong> {result.candidate.position}
            </p>
            <p className="text-gray-300 my-4">
              {result.candidate.background}
            </p>
            
            {/* Summary text with italic and muted color */}
            <p className="text-gray-400 italic text-sm mt-4">
              You agreed on {result.matches} out of {result.totalQuestions} issues
            </p>
          </div>
        ))}
        
        <div className="text-center mt-8">
          <button 
            onClick={() => {setShowResults(false); setUserAnswers({});}}
            // Styling for the "Start Over" button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}

return (
  // Main container with dark background
  <div className="bg-gray-900 text-white min-h-screen p-6">
    <div className="max-w-4xl mx-auto">
      {/* Title and description with light text */}
      <h1 className="text-4xl font-bold text-center mb-4">{config.title}</h1>
      <p className="text-center text-gray-400 mb-8">{config.description}</p>
      
      <Questionnaire 
        questions={config.questions}
        onComplete={handleComplete}
      />
    </div>
  </div>
);
}

export default ElectionMatcher;