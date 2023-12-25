import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
 const nav = useNavigate()
  const handleLogin = ()=>{
    if(remember){
      localStorage.setItem('userName', userName);
      localStorage.setItem('timespan', Date.now())
       nav('/about')
    }
  }

  useEffect(() =>{
    const user = localStorage.getItem('userName');
    const timeSpan = localStorage.getItem('timespan');
     if(user && timeSpan){
      // setUserName(user)
      const fiveDays = 200;
      const currentTime = Date.now()
      // console.log(currentTime)
      if(currentTime - parseInt(timeSpan, 5) > fiveDays){
        localStorage.removeItem('userName ');
        localStorage.removeItem('timespan')
      }
      else{
        setRemember(true)
      }
     }
  },[])

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        userName : 
        <input type="text" value={userName} onChange={(text) => setUserName(text.target.value)} />
      </label>
        <br />
        <label>
        password : 
        <input type="password" value={password} onChange={(pass) => setPassword(pass.target.value)} />
      </label>
      <br />
      <label>
        Remember me : 
        <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home