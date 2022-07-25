import './about.scss'


const About = ()=>{
    return(
        <div className="about-wrapper">
            <div className="about-container">
                <span className="title">DOB:-</span>
                <span className="value">01/07/1997</span>                
            </div>
            <div className="about-container">
                <span className="title">Proficiency:-</span>
                <span className="value">Hindi,English</span>                
            </div>
            <div className="about-container">
                <span className="title">Gendar:-</span>
                <span className="value">Male</span>                
            </div>
            <div className="about-container">
                <span className="title">Hobbies:-</span>
                <span className="value">Travelling,Reading Novels</span>                
            </div>
        </div>
    )
}


export default About