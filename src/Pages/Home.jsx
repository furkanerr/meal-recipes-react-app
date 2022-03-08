import React, {useEffect} from "react";
import MealCard from "../components/MealCard/MealCard";
import MealServices from '../Services/api';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import HomeStyle from './HomeStyle.css';


const Home = () => {

    const { isLoading, error, data } = useQuery('mealData',()=>MealServices.GetRandomMeal())
    console.log(data)
    
  return (
    <div>
         <div className="cardContainer">
        {
           
            data?.meals.map((meal)=>(
                <MealCard key={meal?.idMeal} meal={meal} />        
            ))
           
        }
         </div>
        

    </div>
  )
}

export default Home