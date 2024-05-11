import { createSlice } from "@reduxjs/toolkit";


const initialState = { statement: false }

const isVerified = createSlice({
    name: "LoginStatement",
    initialState,
    reducers:{
        trueStatement(state) {
            console.log("trueStatement is called");
             state.statement = true
        },
        falseStatement(state){
            state.statement = false
        }
    }
})

export const { trueStatement, falseStatement } = isVerified.actions; 
export default isVerified.reducer;