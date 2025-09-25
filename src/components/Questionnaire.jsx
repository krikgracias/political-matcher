// Fixed questionnaire component 
import { useState } from 'react';

function Questionnaire({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleAnswer = (answer) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answer
    };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      onComplete(newAnswers);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', backgroundColor: '#FFFFFF' }}>
      <h2 style={{color: '#000000', fontSize: '24px'}}>Question {currentIndex + 1} of {questions.length}</h2>
      <h3 style={{color: '#000000', fontSize: '20px', marginBottom: '20px'}}>{currentQuestion.text}</h3>
      
      <div>
        {currentQuestion.options.map(option => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
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
            onMouseOver={(e) => e.target.style.backgroundColor = '#E0E0E0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#F0F0F0'}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Questionnaire;