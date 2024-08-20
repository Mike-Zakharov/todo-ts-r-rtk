import { FC } from "react";
import SearchPanel from '../search-panel/search-panel';
import StatusFilter from "../filter/status-filter";
import TodoCounter from "../todo-counter/todo-counter";
import styles from "./header.module.sass"

const Header: FC = () => {

    return (
        <div className={styles.wrapper}>
            <TodoCounter/>
            <div className={styles.wrapperSearchFilter}>
                <SearchPanel/>
                <StatusFilter/>
            </div>
        </div>
    )
}

export default Header;