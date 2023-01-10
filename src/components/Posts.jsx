import { useEffect, useState } from "react";
import axios from "axios";

const Posts = ({index}) => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getPosts(); 
    }, []);

    let userPosts = posts.filter((post) => post.userId === index)

    return (
        userPosts.map((post) => 
            <li>{ post.title }</li>
        )
    )
}
 
export default Posts;