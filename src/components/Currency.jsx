import React, { useState, useEffect } from 'react'
import Selector from './Selector';
import Clock from './Clock';


function Currency() {

    const k = () => {
        return Math.random() > 0.5 ? 1.0000001 + (Math.random() / 1000) : 0.99999 - (Math.random() / 1000)
    }
    const [RUB_USD_TOM, setRUB_USD_TOM] = useState([62.5, 68.35]);
    const [EUR_USD_TOM, setEUR_USD_TOM] = useState([0.91, 1.11]);
    const [EUR_GBR_TOM, setEUR_GBR_TOM] = useState([0.7, 1.04]);
    const [EUR_CHF_TOM, setEUR_CHF_TOM] = useState([0.8, 1.2]);
    const [USD_CNY_TOM, setUSD_CNY_TOM] = useState([6.75, 7.09]);
    const [GBP_USD_TOM, setGBP_USD_TOM] = useState([1.1, 1.34]);
    const [USD_CHF_TOM, setUSD_CHF_TOM] = useState([0.85, 1.04])

    useEffect(() => {
        let timeout = setTimeout(() => {
            setRUB_USD_TOM([RUB_USD_TOM[0] * k(), RUB_USD_TOM[1] * k()])
            setEUR_USD_TOM([EUR_USD_TOM[0] * k(), EUR_USD_TOM[1] * k()])
            setEUR_GBR_TOM([EUR_GBR_TOM[0] * k(), EUR_GBR_TOM[1] * k()])
            setEUR_CHF_TOM([EUR_CHF_TOM[0] * k(), EUR_CHF_TOM[1] * k()])
            setUSD_CNY_TOM([USD_CNY_TOM[0] * k(), USD_CNY_TOM[1] * k()])
            setGBP_USD_TOM([GBP_USD_TOM[0] * k(), GBP_USD_TOM[1] * k()])
            setUSD_CHF_TOM([USD_CHF_TOM[0] * k(), USD_CHF_TOM[1] * k()])
        }, 10000)
        return () => {
            clearTimeout(timeout);
        };
    })

    let buy_sell_course_values = [
        ["RUB/USD TOM", RUB_USD_TOM],
        ["EUR/USD TOM", EUR_USD_TOM],
        ["EUR/GBP TOM", EUR_GBR_TOM],
        ["EUR/CHF TOM", EUR_CHF_TOM],
        ["USD/CNY TOM", USD_CNY_TOM],
        ["GBP/USD TOM", GBP_USD_TOM],
        ["USD/CHF TOM", USD_CHF_TOM]
    ]



    return (
        <>
            <Clock />
            <p></p>
            <Selector buy_sell_course_values={buy_sell_course_values} />
        </>
    );
}

export default Currency