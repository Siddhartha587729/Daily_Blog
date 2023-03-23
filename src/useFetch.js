import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [ispending,setIsPending] = useState(true);
    const [error,setError] = useState(false);

    /* const [name,setName] = useState('Mario'); */
    
    /* const handleDelete= (id)=>{
        const newBlogs= blogs.filter(blog => blog.id!==id);
        setBlogs(newBlogs);
        //console.log("debug");
    } */

    /* useEffect(()=>{
        //console.log({blogs});
        console.log("<=new render");
        console.log(name);
    },[name]) //here second argument uses dependencies that calls useEffect only on first render and on certain render depending on dependencies
 */

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url,{signal: abortCont.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error("Resource not found...");
                }
                return res.json();
            })
            .then(data =>{
                setData(data);
                setError(false)
                setIsPending(false);
            })
            .catch(err =>{
                if(err.name==='AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },1000);

        return ()=> abortCont.abort();
    },[url]);

    return {data,ispending,error};
}

export default useFetch;