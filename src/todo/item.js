import { useDispatch } from "react-redux"
import { addTodo } from "../stores/todo";

export default function Item({todo, setTodos, user, setModal}){
    const dispatch = useDispatch();
    
    const editTodo = () =>{
        setModal({
            name:"edit",
            data: todo
        })
    }
    
    const deleteTodo = () =>{
        dispatch(deleteTodo(todo.id))
    }
    
    return(
        <>
            <li>
                <span style={{textDecoration: todo.done ? 'line-through' : false}}>
                    {todo.title} - {todo.user}
                </span>
                {todo.user === user.id && (
                    <>
                        <button className="editBtn" onClick={editTodo}>Editle</button>
                        <button onClick={deleteTodo}>Sil</button>
                    </>
                )
                
                }
            </li>
        </>
    )
}