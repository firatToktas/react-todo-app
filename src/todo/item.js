export default function Item({todo}){
    const editTodo=()=>{
        //elemenı editle
    }
    const deleteTodo=()=>{
        //elemanı sil
    }
    console.log(todo);
    return(
        <>
            <li>
                <span style={{textDecoration: todo.done ? 'line-through' : false}}>
                    {todo.title} - {todo.user}
                </span>
                <button className="editBtn" onClick={editTodo}>Editle</button>
                <button onClick={deleteTodo}>Sil</button>
            </li>
        </>
    )
}