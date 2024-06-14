import "./Container.css"
import { useState } from "react";


function Container({title}) {

const [isShowing, setIsShowing] = useState(false);

function handleIsShowing(){

    setIsShowing (!isShowing);
}


    return(
        <div className="div-style1">
            <h1 onClick={handleIsShowing}>Title:</h1>
            {/* {isShowing? <p>{title}</p> : null } */}
            {isShowing && <p>{title}</p>}
        </div>
    )
    
}

export default Container