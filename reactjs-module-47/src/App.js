import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
  
  
}
function ExternalUsers(){
  const [users,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])
  return (
    <div>
      <h1>Users:{users.length}</h1>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div style={{border:'1px solid red', width:'200px',margin:'0 auto',marginBottom:'20px'}}>
      <h2>Name:{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  )
}
export default App;
