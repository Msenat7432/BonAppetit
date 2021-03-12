import React, { useState, useEffect } from 'react';


const Instructions = ({match}) => {
    const [instructions, setInstructions] =useState()
    const meal = match.params.instruction
     useEffect(() => {
	 const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

				fetch(url)
					.then((res) => res.json())
					.then((json) => {
						setInstructions(json.meals[0].strInstructions);
						console.log(json.meals[0]);
					})
					.catch(console.error);
			}, []);
    return (
        <div>
           {instructions ? <h1>{instructions}</h1> : null}

        </div>
    );
};

export default Instructions;