import React from 'react'
import './styles/Testymonials.css'
import ReviewCard from './ReviewCard'

const Testymonials = () => {
  return (
    <section className='Testymonials'>
        <h1 className='testymonials-heading'>Testymonials</h1>
        <div className='reviews-list'>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
        <button className='contact-btn' onClick={()=>window.location.href='#contact-sec'}>Contact us</button>
    </section>
  )
}

export default Testymonials