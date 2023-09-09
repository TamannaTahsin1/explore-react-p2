import Friend from './Friend'
import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends(){
    // declare a state to hold data
    const [friends, setFriends] = useState([])
    // use effect with dependency array
    useEffect(() => {
        // use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // set loaded data in the useState
        .then(data => setFriends(data))
    } , [])
    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}