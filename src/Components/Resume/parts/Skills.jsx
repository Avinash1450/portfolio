import Wrapper from './Wrapper'

const Skills = ()=>{
    var language = [{lan : "HTML", per : "50%" },
                    {lan : "CSS", per : "50%" },
                    {lan : "JS", per : "60%" },
                    {lan : "REACT", per : "60%" },
                    {lan : "PYTHON", per : "60%" },
                    {lan : "DJANGO", per : "60%" },
                    {lan : "FLASK", per : "60%" },
                    {lan : "SQL", per : "40%"}
                    ]
    return (
            language.map((element,index) =>{
                return (
                    <Wrapper info={element}/>
                )
            })
         )
}

export default Skills