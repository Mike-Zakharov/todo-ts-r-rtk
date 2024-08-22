import { FC } from "react";
import {FilterLabel, FilterTodoItems} from '../../store/todo-slice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './status-filter.module.sass';


const StatusFilter: FC = () => {
    const dispatch = useAppDispatch();
    let validLabel = useAppSelector(state => state.todoList.filter);

    type Label = {
            label: FilterLabel;    
        };

    const buttonsArr: Label[] = [
        {label: 'all' },
        {label: "active" },
        {label: 'done' },
    ];

    const onFilterItems = (label:FilterLabel) => {
        dispatch(FilterTodoItems(label))    
    }

    const buttons = buttonsArr.map(btn => {
        let isActive = validLabel === btn.label;
        let btnStyles = isActive ? `${styles.pressBtn}` : `${styles.filterBtn}`;

        return(
            <button id={btn.label} name={btn.label}
                    key={btn.label} className={btnStyles}
                    onClick={()=>onFilterItems(btn.label)}>
                {btn.label}
            </button>
        )
    })

    return (
        <div>
            {buttons}
        </div>
    )
}

export default StatusFilter;


 