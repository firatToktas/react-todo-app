import { useState } from "react"

export default function Add({setTodos}){
    const [todo, setTodo]= useState('');
    const submitHandle = e=>{
        e.preventDefault();
        setTodos(todos=>[{
            title:todo,
            done:false,
            user:1
        },...todos])
        setTodo('')
    }
    return(
        <>
            <form onSubmit={submitHandle} >
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
                <button disabled={!todo}>Ekle</button>
            </form>
        </>
    )
}