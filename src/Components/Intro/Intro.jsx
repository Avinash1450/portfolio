import './Intro.scss'
import React, { Component,useEffect,useRef } from 'react'
import { init } from 'ityped'



const Intro = ()=>{

    const myRef = useRef()

    useEffect(()=>{
        const myElement = myRef.current
        init(myElement, { showCursor: false, strings: ['Frontend Developer','Backend Developer','Full Stack Developer']})
    })

    return(
        <div className="intro" id="intro">
            <div className="wrapper">
                    <div className="left">
                        <div className="left-wrapper">
                            <p ref={myRef}></p>
                            <p></p>
                            <p><span>AVINASH</span><span>YADAV</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad repellendus reprehenderit voluptate autem natus consectetur dolorum hic, debitis excepturi.</p>
                            <div className="btn">
                            <a href="" download=""><button><span>RESUME</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-wrapper">
                            <div className="pic">
                                <img src="assets/1.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Intro