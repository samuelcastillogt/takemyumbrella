import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    word: undefined,
    result: []
  },
  reducers: {
    SET_WORD: (state, action)=>{
       return { ...state,
        word: action.payload}
    },
    SET_RESULT: (state, action)=>{
      return {
        ...state,
        result: action.payload
      }
    },
    RESET:()=>{
      return {
        value: 0,
        word: undefined,
        result: []
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { SET_WORD, SET_RESULT, RESET } = counterSlice.actions

export default counterSlice.reducer