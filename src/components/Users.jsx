import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

const Users = () => {
    
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const [responsePosts, responseUser] = await Promise.all([axios.get('https://jsonplaceholder.typicode.com/posts'), axios.get('https://jsonplaceholder.typicode.com/users')])

            responseUser.data.forEach((user) => {
                user.posts = responsePosts.data.filter((post) => post.userId === user.id)
            })
            setUsers(responseUser.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(users)

    return <div>{users ? <List users={users} /> : console.log('error') }</div>
}

export default Users;