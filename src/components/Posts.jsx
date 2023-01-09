import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

const Posts = async () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, []);

    <List posts={posts} />
}
 
export default Posts;