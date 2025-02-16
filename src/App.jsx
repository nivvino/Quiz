import { useContext, useEffect, useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
import { AppContext } from './context'
import { Users } from './initialValues'

function App() {
  const [gameState, setGameState] = useState('mainMenu')
  const [score,setScore]=useState(0)
  const [currentUser,setCurrentUser]=useState('')
  const [scores,setScores]=useState([])
  const savedScores = JSON.parse(localStorage.getItem('userScores')) || [];
  useEffect(()=>{
      if(!savedScores.length)
        setScores(Users)
      else
        setScores(savedScores)
  },[])
  return (
    <AppContext.Provider value={{setGameState,setScore,score,scores,setScores,currentUser,setCurrentUser}}>
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1>Quiz App</h1>
        {gameState==='mainMenu'&&<MainMenu/>}
        {gameState==='quiz'&&<Quiz/>}
        {gameState==='endScreen'&&<EndScreen/>}
      </div>
    </AppContext.Provider>
  )
}

export default App
