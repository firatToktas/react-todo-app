import { useState } from "react";
import Add from "./todo/add";
import TodosList from "./todo/list";
import HeaderApp from "./todo/header";
import Modal from "./todo/modal";
import "./style.css";
import {addTodo} from "./stores/todo"
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector(state=> state.auth)
  const [todos, setTodos] = useState([]);
  const [language, setLanguage] = useState('tr');
  const [theme, setTheme] = useState('light');
  const [modal, setModal]= useState(false);

  const close = () => setModal(false);
  return (
    <>  
      {modal && <Modal close={close} name={modal.name} data={modal.data}/>}
      <HeaderApp/>
      <Add  user={user}/>
      <TodosList todos={todos} setTodos={setTodos} user={user} setModal={setModal}/>
    </>
  );
}

export default App;