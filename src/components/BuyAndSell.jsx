import style from './style.module.css'
import React, { useState } from 'react'
import ModalWindow from './Modal';


function BuyAndSell({ buy_sell_course_values, currentPairIndex }) {

    const [show, setShow] = useState(false);
    const [buy_or_sell, setBuy_or_Sell] = useState(false);


    const handleShowBuy = () => {
        setShow(true)
        setBuy_or_Sell(true)
    }
    const handleShowSell = () => {
        setShow(true);
        setBuy_or_Sell(false)
    }

    return (
        <>
            <div className={style.buysell}>
                <div>
                    <button onClick={handleShowBuy} style={{ textDecoration: 'none', color: 'green', padding: 0, border: 'none', background: 'none' }} > BUY </button>
                    <p></p>
                    <div style={{ textDecoration: 'none', color: 'green' }}>{String(buy_sell_course_values[currentPairIndex][1][0]).slice(0, 7)}   </div>
                </div>

                <div>
                    <button style={{ textDecoration: 'none', color: 'red', padding: 0, border: 'none', background: 'none' }} onClick={handleShowSell}> SELL </button>
                    <p></p>
                    <div style={{ textDecoration: 'none', color: 'red' }}> {String(buy_sell_course_values[currentPairIndex][1][1]).slice(0, 7)}</div>
                </div>
            </div>
            <p></p>
            <ModalWindow show={show} setShow={setShow} currentPairIndex={currentPairIndex} buy_or_sell={buy_or_sell} buy_sell_course_values={buy_sell_course_values}
          
            />
        </>
    )
}

export default BuyAndSell