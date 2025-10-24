import React, {useState, useContext, use} from 'react'

import UserContext from '../context/UserContext'


function Login() {
     const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser,user} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        console.log(user);
        

    }
  return (
    <div>
        <h2>login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' /> {" "}
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>login</button>
    </div>
  )
}

export default Login