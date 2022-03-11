import React, {useEffect} from "react";
import MealCard from "../components/MealCard/MealCard";
import MealServices from '../Services/api';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import HomeStyle from './HomeStyle.css';
import SearchBar from "../components/SearchBar/SearchBar";
import {useSelector} from "react-redux";

const Home = () => {

    const meals = useSelector((state) => state.meals)


    console
        .log(meals)
    
  return (
    <div className="Container">
            <div className="searchBarDiv">
          <SearchBar/>
            </div>

         <div className="cardContainer">
       {

           meals?.entities?.meals?.map((meal)=>(
                <MealCard key={meal?.idMeal} meal={meal} />        
            ))
           
        }
         </div>
        

    </div>
  )
}

export default Home