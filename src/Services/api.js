import axios from "axios";

export default class MealServices {

   static async GetRandomMeal(mealName) {
       console.log("calıstı")
        const {data} =await  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        return data;

    }


}