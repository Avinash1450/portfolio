
import './Nav.scss'
import react from 'react'
import { useRef, useState } from 'react'


const Nav = ()=>{

    const [res, setRes] = useState('')

    const handleHamburger = ()=>{
        if( res === 'active'){
            setRes('')
        }
        else{
            setRes('active')
        }

    }

    return(
        <div className="nav">
            <div className="left">
                <span>Portfolio</span>
                <div className="hamburger" onClick={ ()=>handleHamburger()} >
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
            </div>
            <div className="right">
                <div className={`right-wrapper + ${res}`}>
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Resume</a>
               <a href="#">Contact</a>
               </div>
            </div>
        </div>
    )
}


export default Nav