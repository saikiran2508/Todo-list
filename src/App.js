import React,{useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const[todos,setTodos] = useState([]);
  const [input ,setInput] = useState('');

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
    })
  },[]);

  const addTodo = (event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
        <FormControl>
          <InputLabel>
            Write a Todo
          </InputLabel>
          <Input value={input} onChange={event =>setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" variant="contained" onClick={addTodo} color="primary">
          Add ToDo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo
          ={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
