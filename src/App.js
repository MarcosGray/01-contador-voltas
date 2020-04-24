import React, { useState, useEffect } from 'react';
import './styles/styles.css'

import ShowLaps from './ShowLaps'
import ShowTime from './ShowTime'
import Button from './Button'



function App() {
  const [numLaps, setNumLaps] = useState(1)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000)      
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumLaps(numLaps + 1)
  }

  const decrement = () => {
    if (numLaps > 0) {
      setNumLaps(numLaps - 1) 
    }
    
  }

  const reset = () => {
    setTime(0)    
  }

  const stoped = () => {
    setRunning(!running)
    setTime(0)
    setNumLaps(1)
  }
  return (
    <div className="container" >
      <div className="painel">
        <ShowLaps laps={numLaps} />
        <p>
          <Button text='+' className='bigger' onClick={increment} />
          <Button text='-' className="bigger" onClick={decrement} />
        </p>
        
        {
          numLaps > 0 &&
          <ShowTime hour={Math.round(time/numLaps)} />
        }

        <p>
          <Button onClick={toggleRunning} text={ running ? 'Pausar' : 'Iniciar' } />
          <Button onClick={reset} text='Reiniciar' />
          <Button onClick={stoped} text='Parar' />
        </p>
      </div>
    </div>
  );
}

export default App;
