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
        },
        // todo 상태 변경
        updateTodo: (state, action) => {
            const item = state.todos.findIndex((item) => item.id === action.payload)

            state.todos[item].state = state.todos[item].state === 'todo' ? 'done' : 'todo'
            state.todos.push(state.todos.splice(item, 1)[0])
        },
        // todo 삭제
        deleteTodo: (state, action) => {
            const item = state.todos.findIndex((item) => item.id === action.payload)

            if (item > -1) {
                state.todos.splice(item, 1)
            }
        }
    }
})

export default todoSlice.reducer
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions
