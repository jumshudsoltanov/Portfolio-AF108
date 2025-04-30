import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  type: '', 
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message
      state.type = action.payload.type
    },
    hideToast: (state) => {
      state.message = ''
      state.type = ''
    },
  },
})

export const { showToast, hideToast } = toastSlice.actions
export default toastSlice.reducer
