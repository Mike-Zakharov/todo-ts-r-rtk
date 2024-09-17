import  { FC } from "react";
import { useAppDispatch } from '../../hooks/hooks';
import {SearchingTodoItems} from '../../store/todo-slice';
import styles from './search-panel.module.sass'


const SearchPanel: FC = () => {
    const dispatch = useAppDispatch();

    const maxLength = 10;

    const Searching = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SearchingTodoItems(e.target.value))
    }

    return (
        <input type="text" maxLength={maxLength} className={styles.form} 
               placeholder="Search" onChange={ (e) => Searching(e) }/>   
    )
} 

export default SearchPanel;