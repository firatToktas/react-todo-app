import { useState } from "react";
import Add from "./todo/add";
import TodosList from "./todo/list";
import HeaderApp from "./todo/header";
import "./style.css";

function App() {
  const [todos, setTodos]=useState([]);
  const [user, setUser]=useState(false);
  return (
    <>
      <HeaderApp user={user} setUser={setUser}/>
      <Add todos={todos} setTodos={setTodos}/>
      <TodosList todos={todos}/>
    </>
  );
}

export default App;
