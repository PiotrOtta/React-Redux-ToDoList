import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

export default function List() {
    const tasks = useSelector(store => store.listReducer)
    const [todelete, settodelete] = useState([])
    const HandleToDelete = (id, stan) => {
        let temp = [...todelete]
        if( stan ) temp = [...todelete, {id: id, stan: true}]
        else temp = todelete.filter(item => item.id !== id)
        settodelete(temp)
    }
    const dispatch = useDispatch()
    const HandleDelete = () => {
        let temp = [...todelete]
        todelete.forEach(item => {
            temp = temp.filter(elem => elem.id === item)
            dispatch({type: 'DELETE_TASK', payload: item.id })
        })
        settodelete(temp)
    }

    const tasksHTML = tasks.map(item => {
        const CheckboxHTML = () => {
            const stan = todelete[todelete.findIndex(elem => elem.id === item.id)]?.stan
            let htmlresponse = "Usunąć?"
            if( stan ) htmlresponse = "Do usunięcia."
            return (
                <span className="right">
                    <input type="checkbox" checked={stan} id={item.id} value={item.id} onChange={e => HandleToDelete(e.target.value, e.target.checked)}/>
                    <label className={`${stan}arg`} htmlFor={item.id}>{htmlresponse}</label>
                </span>
            )
        }
        let priorityStyle = "";
        if(item.priorytet)priorityStyle = "priorityStyle"
        return(
            <div className={`content ${priorityStyle}`} key={uniqid()}>
                <span className="left">{item.kategoria}</span><span className="middle">{item.nazwa}</span>
                < CheckboxHTML />
            </div>
        )
    })
    const DeleteHTML = () => {
        if(todelete.length!==0) return (<button className="delete" onClick={() => HandleDelete()}>Usuń wybrane</button>)
        return null
    }
    return (
        <div>
            <hr />
                <div>Lista zadań</div>
                {tasksHTML}
            <hr />
            <DeleteHTML />
        </div>
    )
}
