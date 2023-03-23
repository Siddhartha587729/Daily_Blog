import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogsDetails = () => {
    const {id} = useParams();
    const {data: blog, ispending, error} = useFetch('http://localhost:5000/blogs/' + id);
    const history = useHistory();

    const handleClick = ()=>{
        fetch('http://localhost:5000/blogs/'+ blog.id,{
            method: 'DELETE'
        }).then(()=>{
            console.log("Blog deleted")
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {ispending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By : {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogsDetails;