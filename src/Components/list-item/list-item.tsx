
import { TodoStateItem,
         ToggleTodoDone,
         ToggleTodoImportant,
         DeliteTodoItem } from '../../store/todo-slice';

import { useAppDispatch } from "../../hooks/hooks";
import styles from './list-item.module.sass'

const ListItem = (props: TodoStateItem ) => {
    const dispatch = useAppDispatch()

    let liClassNames = ``

    if (props.done) {
        liClassNames += ` ${styles.done}`;
      }
  
    if(props.important) {
        liClassNames += ` ${styles.important}`
    }

    return (
        <li className={styles.listItem} >
            <button className={styles.btn}
             onClick={()=> dispatch(ToggleTodoImportant(props.id))}> ! </button>

            <span  className={liClassNames}
                    onClick={()=> dispatch(ToggleTodoDone(props.id))}>
                { props.title }
            </span>
            
            <button className={styles.btn}
            onClick={()=>dispatch(DeliteTodoItem(props.id))}>&times;</button>
        </li>
        
    )
}

export default ListItem;