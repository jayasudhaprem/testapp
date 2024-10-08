import { useEffect, useState } from "react";
import redicon from './icon-red.png';
import greenicon from './icon-green.png';

const today = new Date();
function getcurrentDate() {
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`.toString();
}
console.log(getcurrentDate());
function CampaignForm() {
    const [response, setResponse] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const currentDate = new Date();
 
    let campaignList = [{ "id": 1, "cname": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": "8K USD", "userId": 0, "status":"", "icon":""},
    {
        "id": 2, "cname": "Jaxspan", "startDate": "11/21/2024", "endDate": "2/21/2028",
        "Budget": "5.6M USD", "userId": 6, "status":"", "icon":""
    }, { "id": 3, "cname": "Miboo", "startDate": "11/1/2017", "endDate": "6/20/2027", "Budget": "24K USD", "userId": 7, "status":"", "icon":"" },
    {
        "id": 4, "cname": "Trilith", "startDate": "8/25/2023", "endDate": "11/30/2023",
        "Budget": "78K USD", "userId": 1, "status":"", "icon":""
    },
    { "id": 5, "cname": "Layo", "startDate": "11/28/2017", "endDate": "3/10/2028", "Budget": "500K USD", "userId": 9, "status":"", "icon":"" },
    {
        "id": 6, "cname": "Photojam", "startDate": "8/10/2024", "endDate": "6/23/2027",
        "Budget": "1.3kK USD", "userId": 3, "status":"", "icon":""
    },
    { "id": 7, "cname": "Blogtag", "startDate": "6/27/2017", "endDate": "1/15/2026", "Budget": "980 USD", "userId": 2, "status":"", "icon":"" },
    { "id": 8, "cname": "Rhyzio", "startDate": "10/13/2017", "endDate": "1/25/2018", "Budget": "67K USD", "userId": 4, "status":"", "icon":"" }, {
        "id": 9, "cname": "Zoomcast", "startDate": "9/6/2017", "endDate": "11/10/2017",
        "Budget": "10K USD", "userId": 57, "status":"", "icon":""
    },
    { "id": 10, "cname": "Realbridge", "startDate": "3/5/2018", "endDate": "10/2/2017", "Budget": "3K USD", "userId": 5, "status":"", "icon":"" }];
 
    function handleSearchClick() {
      if (searchVal)  { 
            const filterBySearch = response.filter((item) => {
                if (item.cname.toLowerCase()
                    .includes(searchVal.toLowerCase())) { return item; }
            })
            setResponse([...filterBySearch]);
           // console.log(filterBySearch);
          }
    }

    useEffect(() => {
        main();
    }, []);
 
    async function main() {
        const res = await handleFetch();
        mergeResults(campaignList, res);
    }
 
    function mergeResults(campaignList, response) {
        const mergedResults = campaignList.map(campaign => {
            const user = response.find(item => item.id === campaign.userId);
            return {
                ...campaign,
                ...user, 
                username: user ? user.username : "Unknown",
                icon: Date.parse(campaign.startDate) <= Date.parse(getcurrentDate()) && Date.parse(getcurrentDate()) <= Date.parse(campaign.endDate) ? greenicon  : redicon, 
                status: Date.parse(campaign.startDate) <= Date.parse(getcurrentDate()) && Date.parse(getcurrentDate()) <= Date.parse(campaign.endDate) ? "Active"  : "Inactive" 
              };
        });
        setResponse(mergedResults);
        console.log(mergedResults);
    }
 
 
    const handleFetch = async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(apiUrl);
        const json = await response.json();
        return json;
 
    }
 
    return (
        <>
         <input onChange={e => setSearchVal(e.target.value)}>
                </input>
                <input type="button" value="Search" onClick={handleSearchClick} />
            <table>
                <thead>
                    <tr>
                        <th>Campaign Name</th>
                        <th>Username</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {response.map(campaign => (
                        <tr key={campaign.cname}>
                            <td>{campaign.cname}</td>
                            <td>{campaign.username}</td>
                            <td>{campaign.startDate}</td>
                            <td>{campaign.endDate}</td>
                            <td><img src={campaign.icon}></img><span>{campaign.status}</span></td>
                            <td>{campaign.Budget}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
 
export default CampaignForm;