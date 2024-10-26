import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './styles/Recipes.css'
import RecipeCard from './RecipeCard'

const Recipes = () => {
    const [recipeData, setRecipeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
                setRecipeData(response.data.meals)
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[])
  return (
    <section className='Recipes'>
        <h1 className='recipes-heading'>RECIPES</h1>

        {(loading)&&<h3 className='recipe-loading'>Loading...</h3>}

        {(error)&&<h3 className='fetch-error'>{error.message}</h3>}

        {(!loading) && <div className='recipes-list'>
            {
               recipeData.slice(0,3).map((recipe)=>(
                    <RecipeCard
                        key = {recipe.idMeal}
                        name = {recipe.strMeal}
                        recipeImg = {recipe.strMealThumb}
                    />
                )) 
             }

        </div>}
        <button className='contact-btn' onClick={()=>window.location.href='#contact-sec'}>Contact us</button>
    </section>
  )
}

export default Recipes