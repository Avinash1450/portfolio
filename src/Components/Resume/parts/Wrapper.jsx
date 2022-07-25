import './wrapper.scss'

const Wrapper  = (props)=>{

    
    return(
        <div className="skills-wrapper">
            <div className="lan">{props.info.lan}</div>
            <div className="skills-box">
                <div className="skills-outer">
                    <div className="skills-inner" style={{ "width" : props.info.per}}>
                        <div className="skills-span">{props.info.per}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper