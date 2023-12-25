import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
//  const nav = useNavigate()
//   useEffect(() =>{
//    const user = localStorage.getItem('userName')
//    console.log('user', user)
//     if(user){
//      nav('/about')
//     }
//   },[])

  return (
    <div>
        <nav>
            <ul className='container'>
                <li >
                    <Link className='item' to='/home'>Home</Link>
                </li>
                <li>
                <Link className='item' to='/about'>About</Link>
                </li>
                <li>
                <Link className='item' to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Dashboard