import React, {useState,useEffect} from 'react'
import style from './style.module.css'

const Clock = () =>{

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    useEffect( () => {
         setInterval(()=>{
        setCurrentTime(new Date().toLocaleTimeString())
    },1000)
},[])

return (
    <div className={style.clock}>
    {currentTime }
    </div>
)
}



export default Clock