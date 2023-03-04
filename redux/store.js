import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './word.slice'
export default configureStore({
  reducer: {counter: counterReducer}
})