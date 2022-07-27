
import './Nav.scss'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

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
                <HashLink to="#intro" smooth>Home</HashLink>
                <HashLink to="#projects" smooth>Projects</HashLink>
                <HashLink to="#resume" smooth>About</HashLink>
                <HashLink to="#contact" smooth>Contact</HashLink>
                
               </div>
            </div>
        </div>
    )
}


export default Nav