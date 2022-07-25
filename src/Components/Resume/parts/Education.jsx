import './education.scss'

const Education = ()=>{

    return(
        <div className="education">
            <div className="wrapper">
                <div className="left-edu">
                    <div className="left-wrapper">
                    <span className="header">B Tech(ECE)</span>
                    </div>
                </div>
                <div className="right-edu">
                   
                    <span className="year">2014-2018</span>
                
                </div>
            </div>
            <div className="wrapper">
                <div className="left-edu">
                    <div className="left-wrapper">
                    <div className="header">HIGHER SECONDARY</div>
                    </div>
                </div>
                <div className="right-edu">
                    
                        <span className="year">2012-2013</span>

                </div>
            </div>
            <div className="wrapper">
                <div className="left-edu">
                    <div className="left-wrapper">
                    <span className="header">SECONDARY</span>
                    </div>
                </div>
                <div className="right-edu">
                    
                        <span className="year">2010-2011</span>
                    
                </div>
            </div>
        </div>
    )
}

export default Education