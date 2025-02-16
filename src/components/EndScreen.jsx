import React, { useContext } from 'react'
import { AppContext } from '../context'

export default function EndScreen() {
  const {score,setScore,setGameState,currentUser,scores,setScores,setCurrentUser}=useContext(AppContext)
  const finish=()=>{
    const updatedScores=[...scores]
    updatedScores.push(
      {
        name:currentUser,
        score
      }
    )
    setScores(updatedScores)
    localStorage.setItem('userScores', JSON.stringify(updatedScores));
    setScore(0)
    setCurrentUser('')
    setGameState('mainMenu')
  }
  return (
    <div>
      <h2>Quiz Finished!</h2>
      <h3>Your score: {score}</h3>
      <button onClick={()=>finish()}>Finish</button>
    </div>
  )
}
