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
    reducers: {
        // todo 생성
        addTodo: (state, action) => {
            state.todos.push({
                id: state.currentId++,
                text: action.payload.trim(),
                state: 'todo'
            })
        }
    }
})

export default todoSlice.reducer
export const { addTodo } = todoSlice.actions
