import TodoItem from "./item"
export default function List({todos, setTodos, user}){
    return(
        <>
            <ul>
                {todos.map((todo, index)=><TodoItem todo={todo} todos={todos} setTodos={setTodos} key={index} user={user}/>)}
            </ul>
        </>
    )
}