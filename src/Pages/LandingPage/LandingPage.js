import './LandingPage.css';
import React from 'react';
import Typing from '../../Components/Typing/Typing';
import { Element } from 'react-scroll';
import ParticlesBackground from '../../Components/ParticlesBackground';
import stock from '../../Assets/Images/section-image.jpeg';

function LandingPage() {
    return (
        <Element name='home'>
            <section className='landing-page'>
            <div className='right-section'>
                    <img className="right-section-img" src={stock} alt="Stock Image"></img>
                </div>
                <div className="left-section">
                    <p>Hii 👋 </p>
                    <h2>I'm Vivek😇</h2>
                    <Typing 
                        text={[
                            "Software Engineer 👨‍💻",
                            "Gamer and builder🤖", 
                            "Web Developer 🌐"
                        ]}
                        typingSpeed={93}
                        deletingSpeed={47}
                        duration={1000}
                    />
                </div>
                
            </section>
        </Element>
    );
}
export default LandingPage;
