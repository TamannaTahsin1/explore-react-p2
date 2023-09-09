import { useEffect, useState } from "react"

export default function Users (){
    // declare a state to hold the data
    const [users, setUsers] = useState([]);
    // useEffect with call back and dependency array
    useEffect(()=>{
        // use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // set loaded data in useState
        .then(data => setUsers(data))
    } , [])
    return(
        <div>
            <h3>Users:{users.length}</h3>
        </div>
    )
}