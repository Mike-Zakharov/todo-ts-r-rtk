import { FC } from "react";
import {ButtonsLabels, FilterTodoItems} from '../../store/todo-slice'
import { useAppDispatch } from '../../hooks/hooks';

const StatusFilter: FC = () => {
    
    // сделать радио кнопки и стилизовать их под обычные https://snipp.ru/html-css/style-radio
    // добавить в стейт статус фильтр и при клике на кнопку менять его,а он меняет отображение

    const dispatch = useAppDispatch()

    type Label = {
            label: ButtonsLabels;    
        };

    const buttonsArr: Label[] = [
        {label: 'all' },
        {label: 'active' },
        {label: 'done' },
    ];

    const onFilterItems = (label:ButtonsLabels) => {
        dispatch(FilterTodoItems(label))
    }

    const buttons = buttonsArr.map(btn => {
        

        return(
            <button name={btn.label} key={btn.label}
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


 