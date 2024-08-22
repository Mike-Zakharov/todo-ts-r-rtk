import  { FC } from "react";
import { useAppDispatch } from '../../hooks/hooks';
import {SearchingTodoItems} from '../../store/todo-slice';
import styles from './search-panel.module.sass'


const SearchPanel: FC = () => {
    const dispatch = useAppDispatch();

    const Searching = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SearchingTodoItems(e.target.value))
    }

    return (
        <div>
            <input type="text" className={styles.form} 
                   placeholder="Search" onChange={ (e) => Searching(e) }/>
        </div>
    )
} 

export default SearchPanel;