import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: false,
    user: {}
  },
  reducers: {
    SET_SESION: (state, action)=>{
       return { ...state,
        value: action.payload}
    },
    SET_USER: (state, action)=>{
      return { ...state,
       user: action.payload}
   }
    // SET_WORD: (state, action)=>{
    //    return { ...state,
    //     word: action.payload}
    // },
    // SET_RESULT: (state, action)=>{
    //   return {
    //     ...state,
    //     result: action.payload
    //   }
    // },
    // RESET:()=>{
    //   return {
    //     value: 0,
    //     word: undefined,
    //     result: []
    //   }
    // }
  }
})

// Action creators are generated for each case reducer function
export const { SET_SESION, SET_USER } = userSlice.actions

export default userSlice.reducer