import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import {login, logout} from "../stores/auth";

export default function HeaderApp(){

    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const loginHandle = (userData) =>{
        dispatch(login(userData))
        console.log(user);
    }
    const logoutHandle = ()=>{
        dispatch(logout())
        console.log(user);
    }
    return(
        <header className="header">
            {!user &&
            <>
                <button onClick={()=>loginHandle({id:1, username:"Fırat"})}>Fırat olarak giriş yap</button>
                <button onClick={()=>loginHandle({id:2, username:"Euphrates"})}>Euphrates olarak giriş yap</button>
            </> 
            }
            {user && 
                <>
                    Hoşgeldin {user.username}
                    <button id="logoutBtn" onClick={logoutHandle}>Çıkış Yap</button>
                </>
            }
        </header>
    )
}