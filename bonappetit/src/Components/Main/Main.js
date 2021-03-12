import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';


const Main = (prop) => {
    
 	const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const [meals, setMeals] =useState([])

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
                console.log(json.categories)
				setMeals(json.categories);
			})
			.catch(console.error);
	}, []);
      return (
				<div>
					{meals.map((meal) =>{
    return (
			<div className ="main">
				<Link to={`/recipes/${meal.strCategory}`} key={meal.strCategory}>
					<img src={meal.strCategoryThumb} />
					<h3>{meal.strCategory}</h3>
				</Link>
			</div>
		);
                    })}
				</div>
			);
	
};

export default Main;
