import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(timer);
    }, [running])

    function toggleTimer() {
        setRunning(!running);
    }

    function resetTimer() {
        setTime(0);
        setRunning(false);
    }

  return (
    <>
      <h1>Stopwatch <span>{time}</span></h1>
      <div>
        <button onClick={toggleTimer}>{running ? "Pause" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  )
}

export default App
