import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import MealServices from  '../Services/api'

// First, create the thunk
const fetchMealByName = createAsyncThunk(
    'meal/fetchMealByName',
    async (userId, thunkAPI) => {
        const response = await MealServices.GetMealByName()
        return response
    }
)

// Then, handle actions in your reducers:
const mealsSlice = createSlice({
    name: 'users',
    initialState: { entities: [], loading:false,errors:''},
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
            state.entities.push(action.payload)
            state.loading =false;
        })
        builder.addCase(fetchMealByName.rejected, (state, action) => {
            state.loading = false
            state.error ="Error fetching data"
            console.log(action)

        })
    },
})


export default mealsSlice.reducer;