import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    currentId: number
    todos: {
        id: number
        text: string
        state: string
    }[]
}

const initialState: InitialState = {
    currentId: 0,
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {}
})

export default todoSlice.reducer
