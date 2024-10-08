import { useState } from "react";

function Todo() {
    const[itemData, setItemData] = useState("");
    const[data, setData] = useState([]);
    const handleChange = (e) =>{
        setItemData(e.target.value);
    }
    const handleAdd = (e) =>{
        setData([...data, itemData]);
            }
    return(
        <>
       <input value={itemData} type="text" onChange={handleChange}/> 
       <button onClick={handleAdd}>AddItem</button>
       <ul>
        {data.map((item) =><li>{item}</li> )}
       </ul>
    </>
    );
    }
    
    export default Todo;
    