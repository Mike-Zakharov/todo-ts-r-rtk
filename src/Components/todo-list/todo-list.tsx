import { FC } from 'react';
import styles from './todo-list.module.sass'
import ListItem from '../list-item/list-item'

import {useAppSelector} from '../../hooks/hooks'


const TodoList: FC = () => {
    let todoItems = useAppSelector(state => state.todoList.list)

    

    let listItems = todoItems.map((item) => {
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