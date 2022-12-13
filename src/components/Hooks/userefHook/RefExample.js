import React, { useRef, useState } from "react";

export const RefExample = () => {
  const txtTitle = useRef();
  const hexColor = useRef();
  const [color, setColor] = useState();
  const [txt, setTxt] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setColor(hexColor.current.value);
    setTxt(txtTitle.current.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input ref={txtTitle} type="text" placeholder="color title..." />
        <input ref={hexColor} type="color" style={{ marginLeft: "10px" }} />
        <button style={{ marginLeft: "10px" }}>ADD</button>
      </form>
      <div>
        {txtTitle.current && txtTitle.current.value.length > 0 && (
          <p>Color as a txt : {txt}</p>
        )}
      </div>
      {hexColor.current && hexColor.current.value.length > 0 && (
        <p>Color as a hex : {color}</p>
      )}{" "}
    </div>
  );
};
