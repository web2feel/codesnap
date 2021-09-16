import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    mode:'js',
    scale:2 ,
    spacing: 16,
    dark:true,
    title:'untitled',
    copyAlert:false
}
const PanelSlice = createSlice({
    name:'panel',
    initialState,
    reducers:{
        set_spacing : (state, action) => {
            state.spacing = action.payload.space
        },
        set_dark: (state) => {
            state.dark = !state.dark
        },
        set_title: (state, action) =>{
            state.title = action.payload.title
        },
        set_mode: (state, action) => {
            state.mode = action.payload.mode
        },
        set_copyAlert : (state) => {
            state.copyAlert = !state.copyAlert
        }

    }
})

export const {set_spacing, set_dark, set_title, set_mode, set_copyAlert} = PanelSlice.actions
export default PanelSlice.reducer