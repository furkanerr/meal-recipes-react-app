import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MealServices from  '../Services/api'

// First, create the thunk
export const fetchMealByName = createAsyncThunk(
    'meal/fetchMealByName',
    async (mealName, thunkAPI) => {
        try {
            const response = await MealServices.GetMealByName(mealName)
            return response
        }
        catch (error)
        {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }


    }
)

// Then, handle actions in your reducers:
const mealsSlice = createSlice({
    name: 'meals',
    initialState: { entities: {}, loading:false,errors:''},
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchMealByName.pending, (state, action) => {
            state.loading =true;

        });
        builder.addCase(fetchMealByName.fulfilled, (state, action) => {
            // Add user to the state array
            state.entities=action.payload;
            state.loading =false;

        })
        builder.addCase(fetchMealByName.rejected, (state, action) => {
            state.loading = false
            state.error ="Error fetching data"
            console.log(action)
            console.log("çalişti")

        })
    },
})


export default mealsSlice.reducer;