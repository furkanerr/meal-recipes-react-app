import React from "react";
import MealCardStyle from './MealCardStyle.css';


const MealCard =({meal}) =>{
    return (
        <div className="Container">
           <img className="mealImage" src={meal?.strMealThumb} />
           <p className="mealName">{meal?.strMeal}</p>
        </div>
    )
}

export default MealCard;