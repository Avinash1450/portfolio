import { useState } from 'react'
import './Resume.scss'
import Education from './parts/Education'
import Skills from './parts/Skills'
import About from './parts/About'
import Others from './parts/Others' 


const Resume = ()=> {

    const [education, setEducation] = useState(true)
    const [skills, setSkills] = useState(false)
    const [about, setAbout] = useState(false)
    const [others, setOthers] = useState(false)

    var handleEducation = ()=>{
        setOthers(false)
        setAbout(false)
        setSkills(false)
        setEducation(true)
    }

    var handleOthers = ()=>{
        setAbout(false)
        setSkills(false)
        setEducation(false)
        setOthers(true)
    }

    var handleSkills = ()=>{
        setOthers(false)
        setAbout(false)
        setEducation(false)
        setSkills(true)
    }

    var handleAbout = ()=>{
        setOthers(false)
        setSkills(false)
        setEducation(false)
        setAbout(true)
    }

    return(
        <div className="resume" id="resume">
            <div className="container">
                <div className="left">
                    <div className="left-wrapper">
                        <div className="icons-wrapper">
                          
                        </div>
                        <div className="text-wrapper">
                            <span onClick={ ()=>handleEducation() } className={ "text " + ( education? "active" : "" )} id="text1"><div className="movable"></div><p>EDUCATION</p></span>
                            <span onClick={ ()=>handleSkills() } className= {"text " + ( skills? "active" : "" )} id="text2"><div className="movable"></div><p>SKILLS</p></span>
                            <span onClick={ ()=>handleOthers() } className={"text " + ( others? "active" : "" )} id="text3"><div className="movable"></div><p>OTHERS</p></span>
                            <span onClick={ ()=>handleAbout() } className={"text " + ( about? "active" : "" )} id="text4"><div className="movable"></div><p>ABOUT</p></span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-wrapper">
                        { education && <Education/> }
                        { others && <Others/> }
                        { skills && <Skills/> }
                        { about && <About/> }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume