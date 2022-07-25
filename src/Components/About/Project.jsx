import './Project.scss'

const Project = (props)=>{

    return(
        <div className="project">
            <div className="left-project">
                <div className="left-wrapper-project">
                    <h2>{props.blog.title}</h2>
                    <p>{props.blog.description}</p>
                    <div className="skills">
                    { props.blog.skills.map(element=><span>{element}</span>) }
                    </div>
                </div>
            </div>
            <div className="right-project">
                <div className="right-wrapper-project">
                    <div className="pic-project">
                        <img src={props.blog.image} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project