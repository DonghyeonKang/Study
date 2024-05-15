import React from "react";
import "./Form.css";

const Form = ({ todo, myChange, myCreate, myEnter }) => {
  return (
    <div className="form">
      <input value={todo} onChange={myChange} onKeyDown={myEnter} />
      <div className="create-button" onClick={myCreate}>
        추가
      </div>
    </div>
  );
};
export default Form;
