import { Link } from 'react-router-dom'
import React from 'react'
import style from './style.module.css'


export default function Header () {
  

  return (
    <div className={style.container} >
    <div> <Link style={{ textDecoration: 'none', color: 'blue' }} to={"/"}>Trade</Link> </div>
    <div> <Link style={{ textDecoration: 'none', color: 'blue' }} to={"/archive"}>Archive</Link> </div>
    </div>
  )
}



