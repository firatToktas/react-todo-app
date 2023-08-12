export default function Modal({close, name, data}){
    return(

        <div style={{position:"absolute", marginTop:"-50px", marginLeft:"40px"}}>modal yav <br/>
            <button onClick={close}>kapat</button>
        </div>
    )
}