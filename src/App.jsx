import { useState } from 'react'

import './App.css'

const App = () => {

  const states = [
    {state: "Off",image:"images/led_off.jpg"},
    {state: "On",image:"images/led_on.jpg"},
]

  const [stateLed, setStateLed] = useState(states[0])

  const changeState = () =>{

    if(stateLed.state === "Off"){
      setStateLed(states[1])
    }

    if(stateLed.state === "On"){
      setStateLed(states[0])
    }
  } 
  
  return (
    <div>

      <img src={stateLed.image} alt="React logo" />
      <button onClick={()=>changeState()} >change</button>

    </div>
  )
}

export default App
