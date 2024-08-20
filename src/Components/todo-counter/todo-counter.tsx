import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import styles from './todo-counter.module.sass'

const TodoCounter: FC = () => {
    let todoItems = useAppSelector(state => state.todoList.list);
    
    const doneCount = todoItems.filter((el) => el.done).length;
    const todoCount = todoItems.length - doneCount;

    const Counter = `${todoCount} more todo, ${doneCount} done`

    return (
        <div className={styles.wrapper}>
            {Counter}
        </div>
    )
}

export default TodoCounter;