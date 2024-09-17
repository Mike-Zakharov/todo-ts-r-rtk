import { FC }  from 'react';
import styles from './App.module.sass'
import TodoList from '../todo-list/todo-list'
import ItemAddForm from '../item-add-form/item-add-form'
import Header from '../header/header';


const App: FC = () => {
 

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Todo App</h1>
      <Header/>
      <TodoList/>
      <ItemAddForm />
    </div>
  );
}


export default App;
