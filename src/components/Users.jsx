import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

const Users = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, []);

    console.log(users)

    return <div>{users ? <List users={users} /> : console.log('error') }</div>
}

export default Users;