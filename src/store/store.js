import { configureStore } from '@reduxjs/toolkit'
import mealsReducer from "../features/mealSlice";


 const store = configureStore({
    reducer: {
        meals:mealsReducer

    },
})

export default store;