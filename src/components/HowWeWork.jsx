import React from 'react'
import './styles/HowWeWork.css'

const HowWeWork = () => {
  return (
    <section className='howSec'>
        <div className='howSec-text'>
        <h1 className='howSec-heading'>HOW WE WORK</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        </div>
        <div className='howSec-imgList'>
            <img src={require('../utils/imgs/bake4.png')} alt='bake-img' />
            <img src={require('../utils/imgs/bake3.png')} alt='bake-img' />
            <img src={require('../utils/imgs/bake2.png')} alt='bake-img' />
            <img src={require('../utils/imgs/bake1.png')} alt='bake-img' />
        </div>
        <button className='contact-btn' onClick={()=>window.location.href='#contact-sec'}>Contact us</button>
    </section>
  )
}

export default HowWeWork