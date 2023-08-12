import { useState } from "react";
import Add from "./todo/add";
import TodosList from "./todo/list";
import HeaderApp from "./todo/header";
import Modal from "./todo/modal";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState('tr');
  const [theme, setTheme] = useState('light');
  const [modal, setModal]= useState(false);
  
  const close = () => setModal(false);
  return (
    <>  
      {modal && <Modal close={close} name={modal.name} data={modal.data}/>}
      <HeaderApp user={user} setUser={setUser}/>
      <Add setTodos={setTodos} user={user}/>
      <TodosList todos={todos} setTodos={setTodos} user={user} setModal={setModal}/>
    </>
  );
}

export default App;
