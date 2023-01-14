const Posts = ({posts}) => {

    return (
        posts.map((post) => 
            <li key={post.id}>{ post.title }</li>
        )
    )
}
 
export default Posts;