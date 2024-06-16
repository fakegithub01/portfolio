import { Element } from 'react-scroll';
import './ContactMe.css'

function ContactMe(){
    return (
        <Element name='contactMe'>
            <section className='contact-us'>
                <div className="contactMe-left-section">
                    <div className="left-section-header">
                      
                    </div>
                    <div className='location'>
                        <i class="fa-solid fa-location-dot"></i>
                        <h2> Haryana, India</h2>
                    </div>
                    <div className="email">
                        <i class="fa-solid fa-envelope"></i>
                        <h1>vivek.23bcs10062@ms.sst.scaler.com</h1>
                    </div>
                    
                    <div className="socialIcons">
                        <a href='www.linkedin.com/in/'><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/fakegithub01'><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
                        <a href=''><i class="fa-brands fa-square-x-twitter"></i></a>
                    </div>
                </div>
                <div className="contactMe-right-section">
                   
                </div>
            </section>
        </Element>
    )
}
export default ContactMe;