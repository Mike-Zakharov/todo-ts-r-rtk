import React, { useState, Dispatch, FC} from 'react';
import styles from './item-add-form.module.sass';
import { useAppDispatch } from '../../hooks/hooks';
import { AddTodoItem } from '../../store/todo-slice';


const ItemAddForm: FC = () => {
    const [label, setLabel] = useState<string>('')

    const onLabelChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value)    
    };

    const dispatch = useAppDispatch()

    const handleAddItem = (
        e: React.FormEvent<HTMLFormElement>,
        label:string,
        setLabel:Dispatch<React.SetStateAction<string>>
        ) : void => {
        e.preventDefault()
        if(label.trim().length){
            dispatch(AddTodoItem(label));
            setLabel('') 
        }
        
    };

    return (
        <form className={styles.wrapper}
                onSubmit={ (e) => handleAddItem(e,label,setLabel) }>
            <input 
                name='add-form'
                className={styles.form} 
                type="text" 
                placeholder='What needs to be done' 
                onChange={onLabelChange}
                value={label}
                >         
            </input>
            <button type="submit" 
            className={styles.addBtn}>
                ADD
            </button>
        </form>

    )    
    
};


export default ItemAddForm;