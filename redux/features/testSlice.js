const { createSlice } = require("@reduxjs/toolkit");

const initialState  = {
    arr : [{name:'kapil',age:25}]
}

const addDataRed = (state,action)=>{
    console.log("actions",action.payload)
  state.arr.push(action.payload)
}

const removeDataRed = (state,action)=>{
    console.log("actions remove",action)
    
}

export const testSlice = createSlice({
    name : 'test',
    initialState,
    reducers:{
        addData:addDataRed,
        removeData:removeDataRed, 
    }
})

export const {addData , removeData} = testSlice.actions

export default testSlice.reducer