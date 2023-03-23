import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs,ispending,error}=useFetch('http://localhost:5000/blogs');
    
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {ispending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/*  {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>} */}
            {/* <h2>Home</h2> */}
            {/* <button onClick={()=>{setName('luigi')}}>Click to change name</button> <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==='mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;