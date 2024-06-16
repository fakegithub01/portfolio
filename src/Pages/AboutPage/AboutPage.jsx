import './AboutPage.css'
import { Element } from 'react-scroll';
import profile from '../../Assets/Images/profile.png'

function AboutPage(){
    return(
        <Element name='About'>
            <section className="about-me-page">
                <div className="about-me">
                    
                    <div className="about-me-content">
                        <h2>Hello 👋 </h2>
                        <h5><p>
                        Greetings! I'm Vivek ☺️, a dedicated software developer driven by the pursuit of creating outstanding web solutions and robust backend systems. Equipped with a knack for problem-solving, I excel in crafting code that not only functions seamlessly but also delivers enduring results.

In this dynamic tech realm, I continually embrace new tools and methodologies to stay at the forefront of innovation. Let's embark on a journey of endless possibilities together and craft something truly extraordinary! 🚀💻🌟                            </p></h5>
                    
                        <p>
🌟 Prepared for exciting collaborations and groundbreaking projects! Join me, fellow developers and tech enthusiasts, as we embark on an inspiring journey of innovation. Together, let's engineer solutions that redefine the future! Happy coding—let's make magic happen! 🚀✨         
               </p>
                    </div>

                    {/* <div className="profile-img">
                        <img src={profile} alt="" />
                    </div> */}
                </div>
            </section>
        </Element>
    )
}
export default AboutPage;