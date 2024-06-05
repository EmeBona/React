import { useState } from "react";

function Container({ title }) {
  const [isColapsed, setIsColapsed] = useState(false);
  function onButtonClick(){
    setIsColapsed (!isColapsed)
  }

  return (
    <div style={{ background: "white", border: "1px solid red" }}>
      <h1 onClick={onButtonClick}>Title:{title}</h1>
      {!isColapsed && (
        <div>
          <p>Children showing</p>
        </div>
      )}
    </div>
  );
}

export default Container;
