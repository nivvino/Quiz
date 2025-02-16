import React, { useContext, useState } from 'react'
import { AppContext } from '../context'
import UserTable from './UserTable'

export default function MainMenu() {
  const {setGameState,setCurrentUser}=useContext(AppContext)
  const [name,setName]=useState('')
  const [error,setError]=useState('')
  const confirm=()=>{
    if (!name) {
      setError("Please enter a nickname.");
      return;
    }
    setCurrentUser(name)
    setGameState('quiz')
  }
  return (
    <div style={{display:'flex',flexDirection:'column', width:250}}>
      <input onChange={(e)=>setName(e.target.value)} placeholder='Enter Nickname'></input>
      {error&&<p>{error}</p>}
      <button style={{marginTop:10}} onClick={confirm}>Start Quiz</button>
      <UserTable/>
    </div>
  )
}
