import React from 'react'
import './styles/Hero.css'

const Hero = () => {
  return (
    <section className='Hero'>
            <div className='background-elipse'></div>
            <div className='hero-title'><p>PEACHY PUP </p><p>BAKERY</p></div>
            <div className='hero-info'>
                <div>
                    <h1 className='hero-heading'>
                    TASTY PASTRIES
                    </h1>
                    <p> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                    <button className='more-btn'>
                        SEE MORE
                    </button>
                    
                </div>
                < img src={ require('../utils/imgs/hero-img.jpg')} alt='hero-img' className='hero-img'/>
            </div>
            <div className='hero-contacts'>
                <div className='icons-list'>
                    <img src={require('../utils/imgs/vk-icon.png')} alt='vk-icon' />
                    <img src={require('../utils/imgs/fb-icon.png')} alt='fb-icon' />
                    <img src={require('../utils/imgs/insta-icon.png')} alt='insta-icon' />
                    <img src={require('../utils/imgs/tw-icon.png')} alt='tw-icon' />
                </div>
                <p>Telephone:<span>+7 700 000 00 00</span></p>

            </div>
        
    </section>

  )
}

export default Hero