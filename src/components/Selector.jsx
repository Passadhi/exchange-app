import { memo,useCallback,useState } from 'react'
import style from './style.module.css'
import React from 'react'
import BuyAndSell from './BuyAndSell'

function Selector ({buy_sell_course_values}) {
    
    const [currentPairIndex, setCurrentPairIndex] = useState(0)


    const handlePair = useCallback((e) => {
         setCurrentPairIndex([e.target.value])
    },[])
    
    return (
        <>
            <div className={style.dropdown}>
            <select  value={currentPairIndex} onChange={handlePair} >
                {buy_sell_course_values.map((el, i) => <option   value={i} key={i}>{el[0]}</option>)}
              
            </select>
            </div>
            <p></p>
              <BuyAndSell  buy_sell_course_values={buy_sell_course_values}  currentPairIndex={currentPairIndex}/> 
            </>
    )
}


export default memo(Selector)
