import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

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
			<div className="meal">
				<Link
					className='main'
					to={`/recipes/${meal.strCategory}`}
					key={meal.strCategory}>
					{/* <img src={meal.strCategoryThumb} /> */}
					<button>{meal.strCategory}</button>
				</Link>
			</div>
		);
                    })}
				</div>
			);
	
};

export default Main;
