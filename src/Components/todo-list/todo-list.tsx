import { FC } from 'react';
import styles from './todo-list.module.sass'
import ListItem from '../list-item/list-item'
import { FilterLabel, TodoStateItem } from '../../store/todo-slice'
import { useAppSelector } from '../../hooks/hooks'


function filteredItems(filter:FilterLabel, state:TodoStateItem[]): TodoStateItem[] {
    let visibleState: TodoStateItem[] = []
    switch(filter){
        case "all":
            visibleState = state;
            break;
        case "active":
            visibleState = state.filter(item => item.done === false)
            break;
        case "done":
            visibleState = state.filter(item => item.done)
            break;
        default:
            visibleState = state;
    }
    return visibleState;
}

function SearchingItems(items: TodoStateItem[], searchString: string): TodoStateItem[] {
    if( searchString.length === 0 ) {
        return items;
    }

    return items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
    });
}

const TodoList: FC = () => {
    let todoItems = useAppSelector(state => state.todoList.list)
    const filter = useAppSelector(state => state.todoList.filter)
    let searchString = useAppSelector(state => state.todoList.searchTitle)
    
    let items = filteredItems(filter, todoItems)
    let visibleItems = SearchingItems(items,searchString)
    

    let listItems = visibleItems.map((item) => {
        return(
            <ListItem 
                key={item.title + item.id} 
                title={item.title} 
                important={item.important} 
                id={item.id} 
                done={item.done}
            />
        )
    })
    
    return (
        <ul className={styles.todoList}>
            {listItems}    
        </ul>
    )
}

export default TodoList;


