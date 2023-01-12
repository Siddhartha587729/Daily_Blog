import { useState } from "react";

const Practice = () => {
    const [name,setName] = useState("Mario");

    const handleClick = () =>{
        console.log("Button works");
        setName("Luigi");
    }

    const handleClickAgain = (name) =>{
        console.log("hello "+name)
    }
    const handleClickToTarget = (name,e) =>{
        console.log("hello "+name,e.target)
    }


    return ( 
        <div className="practice">
            <h2>practicepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleClick}>Update</button>
            <button onClick={() => {handleClickAgain('Siddhartha')}}>Click Me Again</button>
            <button onClick={(e) => {handleClickToTarget('Siddhartha',e)}}>Click to target</button>
            <p>{ name }</p>

        </div>
     );
}
 
export default Practice;