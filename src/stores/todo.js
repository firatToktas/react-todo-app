import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todos = createSlice({
    name: 'todos',
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            state.todos.unshift(action.payload); // Immer kullanarak güncelleme yapılıyor
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(t => t.id !== action.payload)
        }
    }
})

export const { addTodo, deleteTodo} = todos.actions;
export default todos.reducer;
