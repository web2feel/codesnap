import { configureStore } from '@reduxjs/toolkit'
import PanelSlice from './Panel/PanelSlice'
export default configureStore({
  reducer: {
      panel:PanelSlice
  },
})