import MealCard from "./components/MealCard/MealCard";
import MealServices from './Services/api';
import React, {useEffect} from "react";



function App() {

  useEffect( async ()  =>{
    let data =await MealServices.GetRandomMeal();
    console.log(data);
    
  },[])
  return (
    <div >
     <MealCard/>
    </div>
  );
}

export default App;
