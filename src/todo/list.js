import TodoItem from "./item"
import { useSelector } from "react-redux"

export default function List({setTodos, user, setModal}){
    const {todos} = useSelector(state => state.todo)
    return(
        <>
            <ul>
                {todos.map((todo, index)=><TodoItem todo={todo} todos={todos} setTodos={setTodos} key={index} user={user} setModal={setModal}/>)}
            </ul>
        </>
    )
}