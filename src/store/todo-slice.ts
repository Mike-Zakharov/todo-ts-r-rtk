import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TodoStateItem = {
  title: string;
  important: boolean;
  id: number;
  done: boolean;
}

export type FilterLabel = 'all' | 'active' | 'done';

type TodoState = {
  list: TodoStateItem[],
  filter: FilterLabel,
  searchTitle: string
}

const initialState: TodoState = {
  list: [
    {title:'Drink morning coffee', important: true, id:96, done:false},
    {title:'watch the series', important: false, id:97, done:false},
    {title:"click click keyboard like I'm working", important: true, id:98, done:false},
    {title:'Drink coffee', important: false, id:99, done:false}  
  ],
  filter: 'all',
  searchTitle: ''
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
      FilterTodoItems(state, action: PayloadAction<FilterLabel>){
        state.filter = action.payload
      },
      SearchingTodoItems(state, action: PayloadAction<string>){
        state.searchTitle = action.payload
      }
    }
      
    
})

export const { 
  AddTodoItem, 
  DeliteTodoItem, 
  ToggleTodoImportant, 
  ToggleTodoDone,
  FilterTodoItems,
  SearchingTodoItems 
} = todoSlice.actions;

export default todoSlice.reducer;