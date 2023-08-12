import TodoItem from "./item"
export default function List({todos, setTodos, user, setModal}){
    return(
        <>
            <ul>
                {todos.map((todo, index)=><TodoItem todo={todo} todos={todos} setTodos={setTodos} key={index} user={user} setModal={setModal}/>)}
            </ul>
        </>
    )
}