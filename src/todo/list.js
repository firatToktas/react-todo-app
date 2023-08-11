import TodoItem from "./item"
export default function List({todos}){
    return(
        <>
            <ul>
                {todos.map((todo, index)=><TodoItem todo={todo} key={index}/>)}
            </ul>
        </>
    )
}