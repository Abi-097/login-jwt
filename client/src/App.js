import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function registerUser(){
   const response =  await fetch('http://localhost:5000/register',{
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password, 
      })
    })

    const data = await response.json()
    console.log(data)

  }
  return (
    <div>
<h1> Register Form </h1>
    <form onSubmit={registerUser}>
    <input 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    type="text" 
    placeholder="Name"/>
  <br/>
    <input 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="email" 
    placeholder="Email"/> 
<br/>
    <input 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    type="password" 
    placeholder="Password"/> 
    </form>
    </div>
    
  );
}

export default App;
