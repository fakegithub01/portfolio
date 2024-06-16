import './Projects.css'
import spotifyProject from '../../Assets/Images/SpotifyProject.png'
import github from '../../Assets/Images/github-logo.png';
import link from '../../Assets/Images/external-link.png'
import QuizApp from '../../Assets/Images/QuizApp.png'
import { Element } from 'react-scroll';
import portfolio from "../../Assets/Images/Portfolio-img.png"

function Projects(){
    return (
        <Element name='projects'>
            <section className="project-section">
            <h1 className='project-section-header'>Projects</h1>
            <div className="project-section-projectCards">
            <div className="projectCard" id='portfolio-project'>
<h2 className="project-title">Portfolio</h2>
<img id="developer-folio" className="project-demoView" src={portfolio} alt="" />
<div className="project-links-description">
    <div className="project-description">


Welcome to the digital playground where creativity meets code! Here, HTML, CSS, and ReactJS unite to sculpt captivating online experiences. Get ready to journey through a realm of interactive wonders, where responsive designs and dynamic content reign supreme. Explore my portfolio, a fusion of artistry and innovation, showcasing a kaleidoscope of personal and professional projects. Ready to inject some pizzazz into your next endeavor? Let's ignite the digital frontier together!                        </div>
    <div className="project-skills-links">
        <div className="project-skills">
            <div className='btn'>JavaScript</div>
            <div className='btn'>REACT</div>
            <div className='btn'>CSS</div>
        </div>
        <div className="project-links">
          <a href="https://github.com/fakegithub01/dev_Portfolio" className="github-icon"><i class="fa-brands fa-github"></i></a>
          <a href=' ' className='deployed-link'><i class="fa-solid fa-link"></i></a>
        </div>
    </div>
</div>
</div>
                
<div className="projectCard">
                    <h2 className="project-title">Weather App</h2>
                    <img id="quiz-app" className="project-demoView" src={QuizApp} alt="" />
                    <div className="project-links-description">
                        <div className="project-description">
                        Discover my weather app—crafted with HTML, CSS, and JavaScript. Experience sleek design, real-time updates, and intuitive controls. Stay ahead with precision forecasts. Ready to navigate the elements? Let's make weather watching effortless!

</div>
                        <div className="project-skills-links">
                            <div className="project-skills">
                                <div className='btn'>JavaScript</div>
                                <div className='btn'>HTML5</div>
                                <div className='btn'>CSS</div>
                            </div>
                            <div className="project-links">
                              <a href="https://fakegithub01.github.io/webd07/" className="github-icon"><i class="fa-brands fa-github"></i></a>
                              <a href=' /' className='deployed-link'><i class="fa-solid fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
             
            




            </div>
        </section>
        </Element>
    )
}
export default Projects;









