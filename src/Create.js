import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create= () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Siddhartha');
    const [ispending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog = {title , body , author}
        setTimeout(()=>{
            fetch('http://localhost:5000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify(blog)
            }).then(()=>{
                console.log("blog added");
                setIsPending(false);
                /* history.go(-1) */
                history.push('/');
            })
        },1000)
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Siddhartha">Siddhartha</option>
                    <option value="Gautam">Gautam</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;