import { useState } from "react";
function StateFn() {
    const [fname,setfname] = useState("");
    const [lname, setlname] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
console.log(fname, lname);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fname} onChange={(e) => setfname(e.target.value)}></input>
                <input type="text" value={lname} onChange={(e) => setlname(e.target.value)}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    );
    }
    
    export default StateFn;
    