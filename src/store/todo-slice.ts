import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TodoStateItem = {
  title: string;
  important: boolean;
  id: number;
  done: boolean;
}

export type ButtonsLabels = 'all' | 'active' | 'done';

type TodoState = {
  list: TodoStateItem[],
  filter: ButtonsLabels
}

const initialState: TodoState = {
  list: [
    {title:'Drink Coffe', important: false, id:97, done:false},
    {title:'Learn React TS', important: true, id:98, done:false},
    {title:'Build React TS App', important: true, id:99, done:false}   
  ],
  filter: 'all'
}

let startId = 100;

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      AddTodoItem (state, action: PayloadAction<string>) {
        
        state.list.push({
          title: action.payload, 
          important: false,
          id: startId++,
          done: false
        })
      },
      DeliteTodoItem(state, action: PayloadAction<number>) {
        state.list = state.list.filter(todo => todo.id !== action.payload)
      },
      ToggleTodoImportant(state, action: PayloadAction<number>) {
        const toggledImportant = state.list.find(todo => todo.id === action.payload)
        if(toggledImportant){
          toggledImportant.important = !toggledImportant.important
        }
      },
      ToggleTodoDone(state, action: PayloadAction<number>) {
        const toggledDone = state.list.find(todo => todo.id === action.payload)
        if(toggledDone){
          toggledDone.done = !toggledDone.done
        }
      },
      FilterTodoItems(state, action: PayloadAction<ButtonsLabels>){

        switch(action.payload){
          case "all":
            state.list = state.list;
            break;
          case "active":
            state.list = state.list.filter(item => item.done === false)
            break;
          case "done":
            state.list = state.list.filter(item => item.done)
            break;
          default:
            state.list = state.list
        }
      }
    }
      
    
})

export const { 
  AddTodoItem, 
  DeliteTodoItem, 
  ToggleTodoImportant, 
  ToggleTodoDone,
  FilterTodoItems 
} = todoSlice.actions;

export default todoSlice.reducer;