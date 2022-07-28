import './Project.scss'
import { Link } from 'react-router-dom'
const Project = (props)=>{

    return(
        <div className="project">
            <div className="left-project">
                <div className="left-wrapper-project">
                    <h2>{props.data.title}</h2>
                    <p>{props.data.description}</p>
                    <div className="skills">
                    { props.data.skills.map(element=><span>{element}</span>) }
                    </div>
                </div>
            </div>
            <div className="right-project">
                <div className="right-wrapper-project">
                    <div className="pic-project">
                        <img className='project-image' src={props.data.image} alt=""/>
                    </div>
                    <div className="project-link">
                        { props.data.link == '' ? '' :
                        <a href={props.data.link} target="_blank">View site &rarr;</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project