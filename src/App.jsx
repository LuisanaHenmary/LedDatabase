import { useState, useEffect } from 'react'
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
import { app } from './appfirebase';

const App = () => {

  const db = getDatabase()
  const reference = ref(db, "datos/led")
  let data = ""
  const led_states = [
    { state: "off", image: "images/led_off.jpg" },
    { state: "on", image: "images/led_on.jpg" },
  ]

  const [stateLed, setStateLed] = useState({ state: "", image: "" })

  const changeState = (led_state) => {

    if (led_state === "off") {
      setStateLed(led_states[0])
    }

    if (led_state === "on") {
      setStateLed(led_states[1])
    }
  }

  useEffect(() => {
    onValue(reference, (resp) => {
      data = resp.val()
      changeState(data)
    })
  }, [data]);


  return (
    <div >
      <img src={stateLed.image} alt="Por favor espere a que cargue la data en firebase" />
    </div>
  )
}

export default App
