import React from 'react'
import './styles/ReviewCard.css'

const ReviewCard = ({rating=5}) => {
  return (
    <div className='ReviewCard'>
        <h3 className='review-name' >Kathryn Murphy</h3>
        <p className='review-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled</p>
        <div className='review-rating'>{Array(rating).fill().map(()=>(<p>★</p>))}</div>
    </div>
  )
}

export default ReviewCard