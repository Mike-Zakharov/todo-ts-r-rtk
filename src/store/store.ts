import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './todo-slice'


const store = configureStore ({
    reducer: {
        todoList: TodoReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;