import { createSlice} from "@reduxjs/toolkit"


export const categorySlice = createSlice({
    name: 'category',
    initialState: {
       name: ''
    },
    reducers: {
        setCategory: (state, { payload }) => {
            state.name = payload
        },
        clearCategory: (state)=> {
            state.name = ''
        }
    }
})

export const { setCategory, clearCategory } = categorySlice.actions;