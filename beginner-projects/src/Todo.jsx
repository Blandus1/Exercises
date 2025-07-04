import {useState} from 'react'

function Todo (){

    const [input,setInput] = useState('');
    const [additems,setAdditems] = useState([])
    // const [complete,setComplete]= useState(false)



    function handleChange({target}){
     setInput(target.value)
    }

    function handleClick(e){
         e.preventDefault()
        setAdditems((prev)=> [...prev,{text:input,complete: false} ])// this gives the current value followed by the previous value 
    }

    const handleDeletevalue=(index)=>{
       setAdditems(additems.filter((_,b)=> b !== index))
    }
 
const handleComplete = (index) =>{
     setAdditems(prev =>prev.map((a, b) =>b === index ? { ...a, complete: !a.complete } : a));
     //this line juggles btn complete being true or false, where when the item was true
     //  if it is true it turns false and vice versa 
     // the map method helps us to have the change on the clicked index(individually)

}
    

    return(
        <>
        <h2>Project1: Personal To-do list</h2>
         <p>Task count:{additems.length}</p> {/*this sets the initial count to zero and  does the counting at every button click  */}
        <input value={input} onChange={handleChange} ></input>
        <button onClick={handleClick} > Add to list </button>
      
        
        <ol>
        
                {additems.map((a,b)=>{
                      return <li key={b}>{a.text}<button onClick={()=> handleComplete(b)}> {a.complete? "complete": "incomplete"}</button>
                                           <button onClick={() => handleDeletevalue(b)}>Delete</button>
                     </li>
                     })}
        </ol>
        </>
    );
}

export default Todo;