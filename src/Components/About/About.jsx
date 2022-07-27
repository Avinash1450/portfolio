import { useState } from 'react'
import './About.scss'
import Project from './Project'

const About = ()=>{

    
    const Blog = {
        "title" : "Blog App",
        "description" : "Responsive Blog project with two apps handling user data and post data seperately",
        "link" : "https://avinash-djang-blog.herokuapp.com",
        "image" : "assets/blog.png",
        "skills"  : [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "PYTHON",
            "DJANGO",
            "dbsqlit3"
        ]
    }

    
    const Todo = {
        "title" : "Todo App",
        "description" : "Todo App with react js for frontend and django rest_framework for backend and fetch api for fetching data",
        "link" : "https://avinash-todo.netlify.app",
        "image" : "assets/todo.png",
        "skills"  : [
            "HTML",
            "SASS",
            "REACT",
            "PYTHON",
            "DJANGO",
            "REST_FRAMEWORK",
            "FETCH API",
            "dbsqlit3"
        ]
    }
    
    const Food = {
        "title"  : "Food app design (only frontend)",
        "description"  : "Fully Responsive food app design",
        "image" : "assets/food.png",
        "skills"  : [
            "HTML",
            "CSS",
        ]
    }

    const Portfolio = {
        "title" : "Portfolio",
        "description" : "Responsive portfolio based on react js framewrok",
        "link" : "https://avinash-yadav-portfolio.netlify.app",
        "image" : "assets/portfolio.png",
        "skills" : [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "REACT JS"
        ]
    }
    const [data, setData] = useState(Todo)

    return(
        <div className="about" id="projects">
            <div className="wrapper">
                <span>PROJECTS</span>
                <div className="container">
                <div className="upper">
                    <span onClick={()=>setData(Blog)}>BLOG APP</span>
                    <span onClick={()=>setData(Todo)}>TODO APP</span>
                    <span onClick={()=>setData(Food)}>FOOD APP</span>
                    <span onClick={()=>setData(Portfolio)}>PORTFOLIO APP</span>
                </div>
                <div className="lower">
                   <Project data = {data}/>
               </div>
               </div>
            </div>
        </div>
    )
}

export default About