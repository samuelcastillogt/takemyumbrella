import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './word.slice'
import userSlice from './user.slice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice
  }
})