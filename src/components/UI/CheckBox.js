import React, { useState } from "react";
import Wrapper from "../Utilities/Wrapper";

function CheckBox(props) {
  const [isCheck, setIsCheck] = useState(true);
  function handlerCheckBoxChange(content) {
    setIsCheck(!isCheck);
    props.onCheckBoxSelected(content, isCheck);
  }

  return (
    <Wrapper>
      <input
        type="checkbox"
        id={props.content.id}
        value={props.content.name}
        onChange={() => handlerCheckBoxChange(props.content)}
        checked={!isCheck}
      />
      <label htmlFor={props.content.id}>{props.content.name}</label> <br />
    </Wrapper>
  );
}
export default CheckBox;
