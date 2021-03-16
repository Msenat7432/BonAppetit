import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';


const Recipes = (props) => {
    // console.log(props.match.params.category)


    
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
    const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.match.params.category}`
    		
             fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setRecipes(json.meals);
				console.log(json.meals)
			})
			.catch(console.error);
	}, []);
    if (recipes.length === 0){
     return (null)
    }
    return (
        <div>
         {recipes.map((recipe) => {
             return (
								<div >
									{' '}
									<Link className ="recipe" to={`/category/${recipe.strMeal}`} key={recipe.srtMeal}>
										<img className ="img1" src={recipe.strMealThumb} alt='' />
										<p>{recipe.strMeal}</p>
									</Link>
								</div>
							);
         })}
         

        </div>
    )
};

export default Recipes;