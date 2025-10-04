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
  // Use padding and set a max-width for the container
  <div className="max-w-3xl mx-auto p-4">
    
    {/* Question counter and text with dark theme colors */}
    <h2 className="text-xl font-bold text-gray-300 mb-2">Question {currentIndex + 1} of {questions.length}</h2>
    <h3 className="text-2xl font-semibold text-white mb-6">{currentQuestion.text}</h3>
    
    {/* Container for the answer buttons */}
    <div className="space-y-4">
      {currentQuestion.options.map(option => (
        <button
          key={option.value}
          onClick={() => handleAnswer(option.value)}
          // Styling for the buttons in the dark theme
          className="block w-full p-4 text-left rounded-lg border border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:border-gray-500 transition-colors"
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);
}
export default Questionnaire;