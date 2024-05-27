import {createSlice , configureStore} from '@reduxjs/toolkit'


const initialState = {
    arrayOfProduct : [],
    typeOfProduct : ""
}

const arrayStoreFunction = createSlice({
    name : 'arrayStore',
    initialState,
    reducers : {
        storeDataFun : (state , action) => {
            console.log(action.payload) 
            state.arrayOfProduct = action.payload
        }
    }
})


const store = configureStore({
    reducer : {
        arrayStore : arrayStoreFunction.reducer
    }
})


export const arrayReduxBtn = arrayStoreFunction.actions
export default store;