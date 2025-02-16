import React, { useContext, useState } from 'react';
import { Questions } from '../initialValues';
import { AppContext } from '../context';

export default function Quiz() {
  const { score, setScore, setGameState } = useContext(AppContext);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setSError] = useState('');
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setSError('');
  };

  const nextQuestion = () => {
    if (selectedAnswer === '') {
      setSError('Please select an answer.');
      return;
    }

    setIsAnswerRevealed(true);
    if (Questions[questionNumber].answer === selectedAnswer) {
      setScore(score + 15);
    }
  };

  const proceedToNext = () => {
    setSelectedAnswer('');
    setIsAnswerRevealed(false);
    setQuestionNumber(questionNumber + 1);
    setSError('');
  };

  const finishQuiz = () => {
    if (selectedAnswer === '') {
      setSError('Please select an answer.');
      return;
    }
    if (Questions[questionNumber].answer === selectedAnswer) {
      setScore(score + 15);
    }
    setGameState('endScreen');
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h2>{Questions[questionNumber].question}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {['optionA', 'optionB', 'optionC', 'optionD'].map((option) => (
            <div key={option}>
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                name="answer"
                onChange={() => handleAnswerSelection(option)}
                disabled={isAnswerRevealed}
              />
              <label>{Questions[questionNumber][option]}</label>
              {isAnswerRevealed && (
                <>
                  {Questions[questionNumber].answer === option ? (
                    <span style={{ color: 'green', fontSize: '20px',fontWeight:'bolder',marginLeft:10 }}>✓</span>
                  ) : (
                    selectedAnswer === option && <span style={{ color: 'red' }}> ❌</span>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {questionNumber === Questions.length - 1 ? (
        <button style={{ marginTop: 10 }} onClick={finishQuiz}>Finish</button>
      ) : (
        <button style={{ marginTop: 10 }} onClick={isAnswerRevealed ? proceedToNext : nextQuestion}>
          {isAnswerRevealed ? 'Next' : 'Check Answer'}
        </button>
      )}
    </div>
  );
}
