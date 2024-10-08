import { useState } from "react";

function FetchTest() {
    const [data, setData] = useState([]);
    const handleFetch = async () =>
    {
     const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
     const response = await fetch(apiUrl);
     const json = await response.json();
     setData(json.slice(0,20));
    // console.log(data);
    }
    return(
        <>
        <button onClick={handleFetch}>Get</button>
       {/*  <ul>
          {
          data.map((item) => <li>{item.title}</li>)
          }
        </ul> */}
        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
            </tr>
            
            {
          data.map((item) => <tr><td>{item.id}</td><td>{item.title}</td></tr>)}
        </table>
    </>
    );
    }
    
    export default FetchTest;
    