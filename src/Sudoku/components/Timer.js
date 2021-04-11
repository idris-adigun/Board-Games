import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

function Timer({getTimer}) {
    const [seconds, setSeconds] = useState(0)
    const [isPaused, setPaused] = useState(false)
   
    useEffect(() => {
        if(!isPaused){
           const id = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
            return () => window.clearInterval(id);
        }
        return undefined
    }, [isPaused]);

    const togglePause = () => {
        setPaused(isPaused => isPaused = !isPaused)
        getTimer(seconds)
    }

    const formatTime = (seconds) => {
        const getSeconds = `0${(seconds % 60)}`.slice(-2)
        const minutes = `${Math.floor(seconds / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2)
        return(`${getHours} : ${getMinutes} : ${getSeconds}`)
    }


    return (
        <div>
            {formatTime(seconds)} <br></br>
                    <Button variant="contained" color="primary" onClick={togglePause}>{isPaused ? 'Continue' : 'Pause'}</Button>
        </div>
    )
}

export default Timer
