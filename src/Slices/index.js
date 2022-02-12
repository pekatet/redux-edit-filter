import { configureStore } from '@reduxjs/toolkit'
import listSlice from './listSlice'
import formSlice from './formSlice'

export default configureStore({
  reducer: {
    listSlice,
    formSlice
  }
})

