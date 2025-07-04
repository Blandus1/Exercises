import {useState} from 'react'

function Todo (){

    const [input,setInput] = useState('');
    const [additems,setAdditems] = useState([])
    //const [list, setList] = useState('')
    const [complete,setComplete]= useState(true)
const [deletevalue,setDeletevalue]= useState([])
const [count,setCount] = useState(0)

    function handleChange({target}){
     setInput(target.value)
    }

    function handleClick(e){
 e.preventDefault()
        setAdditems((prev)=> [...prev,input ])// this gives the current value followed by the previous value 
    }

    const handleDeletevalue=(deleted)=>{
       setAdditems(additems.filter((_,b)=> b !== deleted))
    }

    const handleCount= ()=>{
        setCount(count + 1)
    }

    return(
        <>
        <h2>Project1: Personal To-do list</h2>
        <p>task count:{count}</p>
        <input value={input} onChange={handleChange} ></input>
        <button onClick={()=> {handleClick(); handleCount()}} > Add to list </button>
        {/* <button onClick = {()=> setCount(count +1)} > {count}</button> */}
        
        <ol>
        
                {additems.map((a,b)=>{
                     return <li key={b}>{a}<button onClick={()=> setComplete(!complete)}> {complete? "complete": "incomplete"}</button>
                                           <button onClick={() => handleDeletevalue(b)}>Delete</button>
                     </li>
                     })}
        </ol>
        </>
    );
}

export default Todo;