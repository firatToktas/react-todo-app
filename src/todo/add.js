import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import { addTodo } from "../stores/todo";

export default function Add({user}){
    const [todo, setTodo]= useState('');
    
    const dispatch = useDispatch();

    const submitHandle = e => {
        e.preventDefault();
        dispatch(addTodo({
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id
        }))
        setTodo('')
    }
    return(
        <>
            <form onSubmit={submitHandle} >
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
                <button disabled={!todo || !user}>Ekle</button>
            </form>
        </>
    )
}