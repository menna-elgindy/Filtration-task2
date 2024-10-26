import React from 'react'
import './styles/RecipeCard.css'

const RecipeCard = ({name,recipeImg}) => {
  return (
    <div className='RecipeCard'>
        <img src={recipeImg} alt='recipe-img' className='recipe-img'/>
        <h3 className='recipe-name' > {name}</h3>
        <p className='recipe-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled</p>
    </div>
  )
}

export default RecipeCard