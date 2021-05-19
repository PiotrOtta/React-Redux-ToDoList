import React, {useState} from 'react'
import styles from './Input.module.css'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

const availableCategories = ['Szkoła', 'Nauka', 'Praca', 'Dom', 'Inne']

export default function Input() {
    const [task, setTask] = useState('')
    const [priorytet, setPriorytet] = useState(false)
    const [kategoria, setKategoria] = useState(availableCategories[0])

    const dispatch = useDispatch()

    const SelectHTML = () => {
        return (
            <select name="kategoria" id="kategoria" value={kategoria} onChange={(e) => setKategoria(e.target.value)}>
                {availableCategories.map(elem =>
                {
                    return(
                        <option defaultValue={elem} key={uniqid()}>{elem}</option>
                    )
                })}
            </select>
        )
    }
    const handleSubmit = () => {
        if(task === '' || kategoria === '')return
        dispatch({type: 'ADD_TASK', payload: { id: uniqid(),nazwa: task,kategoria: kategoria,priorytet: priorytet } })
        setTask('')
    }

    return (
        <div className={styles.container}>
            <div>
                <SelectHTML />
                <input 
                type="text" placeholder="Wpisz zadanie..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
                <span className={styles.priority}>
                <input 
                type="checkbox" 
                id="priority"
                value={priorytet} 
                onChange={(e) => setPriorytet(e.target.checked)}/><label htmlFor="priority">Priorytet</label>
                </span>
            </div>
            <button className={styles.addButton}
            onClick={() => handleSubmit()}>Dodaj</button>
        </div>
    )
}
