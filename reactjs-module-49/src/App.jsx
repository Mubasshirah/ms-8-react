import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './assets/components/device/Device'
import Watch from './assets/components/watch/Watch'
import SingleStore from './assets/components/singleStore/SingleStore'

function App() {
 
const devices=['samsung','apple','xiomi','nokia'];
const [stores,setStore]=useState([]);
useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setStore(data))
},[])
  return (
    <div className="App">
      <Watch></Watch>
      {
        stores.map(store=><SingleStore store={store} key={store._id}></SingleStore>)
      }
      {
        devices.map(device=><Device name={device}></Device>)
      }
      
     
    </div>
  )
}

export default App
