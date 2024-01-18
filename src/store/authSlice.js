import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    
    status : false,
    userData : null
}


const authSlice = createSlice({

    name : "auth",
    initialState,
    reducers : { 

        login : (state,action)=>{

            const {userData} = action.payload
            
            state.status = true 
            state.userData = userData
        },
        logout : (state,_)=>{

            state.status = false 
            state.userData = null
        }
    }
})

export const {login,logout} = authSlice.actions   /// login and logout called as acitons and reducer is obj
export default authSlice.reducer