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
      <div style={{padding: '20px', backgroundColor: '#FFFFFF', minHeight: '100vh'}}>
        <h1 style={{color: '#000000', fontSize: '32px', textAlign: 'center'}}>
          {config.title} - Your Results
        </h1>
        <p style={{textAlign: 'center', color: '#666'}}>
          You answered: {Object.keys(userAnswers).length} questions
        </p>
        
        <h2 style={{color: '#000000'}}>Your Best Matches:</h2>
        {matchResults.map((result, index) => (
          <div key={result.candidate.id} style={{
            margin: '20px 0', 
            padding: '20px', 
            border: '3px solid #000',
            borderColor: index === 0 ? '#006400' : '#000',
            backgroundColor: index === 0 ? '#90EE90' : '#FFFFFF',
            borderRadius: '8px'
          }}>
            <h3 style={{color: '#000000', margin: '0 0 10px 0', fontSize: '22px'}}>
              {index + 1}. {result.candidate.name} 
              <span style={{
                color: index === 0 ? '#006400' : '#000000', 
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                - {result.matchPercentage}% Match
              </span>
            </h3>
            <p style={{color: '#000000', margin: '5px 0', fontSize: '16px'}}>
              <strong>District:</strong> {result.candidate.district}
            </p>
            <p style={{color: '#000000', margin: '5px 0', fontSize: '16px'}}>
              <strong>Position:</strong> {result.candidate.position}
            </p>
            <p style={{color: '#000000', margin: '10px 0', fontSize: '16px'}}>
              {result.candidate.background}
            </p>
            <p style={{color: '#000000', fontStyle: 'italic', fontSize: '14px'}}>
              You agreed on {result.matches} out of {result.totalQuestions} issues
            </p>
          </div>
        ))}
        
        <button 
          onClick={() => {setShowResults(false); setUserAnswers({});}}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px'}}>
      <h1 style={{color: '#000000', fontSize: '32px', textAlign: 'center'}}>
        {config.title}
      </h1>
      <p style={{textAlign: 'center', color: '#666', marginBottom: '30px'}}>
        {config.description}
      </p>
      <Questionnaire 
        questions={config.questions}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default ElectionMatcher;