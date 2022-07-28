import './Intro.scss'
import React, { useEffect,useRef } from 'react'
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
                            <p>self learned web developer comfortable working on <span>client-side</span> as well as <span>server-side</span>  technologies, very fast learner with hands on expereince in developing <span>fully responsive websites</span> </p>
                            
                            <div className="btn">
                                <span>Get my resume &rarr;</span>
                                <a href="assets/AVINASH YADAV.pdf" download="AVINASHYADAV RESUME"><button><span>RESUME</span></button></a>
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