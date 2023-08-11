export default function Anannnnn({user, setUser}){
    const loginHandle = (userData) =>{
        setUser(userData)  
        console.log(user);
    }
    const logoutHandle = ()=>{
        setUser(false);
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