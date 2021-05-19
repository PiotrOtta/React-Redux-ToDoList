import './App.css';
import Input      from './Input';
import List       from './List';
import {useState} from 'react';
import uniqid     from 'uniqid';

function App() {

  const [list, setList] =  useState([])

  const addTask = (task, priorytet) => {
    const newTask = {
      id: uniqid(),
      task,
      priorytet
    }
    //dodaje task do list
    const listcopy = [...list, newTask]
    setList(listcopy)
  }
  const doneHandler = idx => {
    //usuwamy zadanie o id
    const tmpList = [...list]
    const newList = tmpList.filter(({id}) => id !== idx)
    setList(newList)
  }

  return (
    <div className="App">
      <Input addTask={addTask} />
      <List list={list} doneHandler={doneHandler}/>
    </div>
  );
}

export default App;
