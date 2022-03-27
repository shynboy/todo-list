import React from "react";
import Wrapper from "../Utilities/Wrapper";
import CheckBox from "./CheckBox";

export default function ListCheckBoxes(props) {
  function handleCheckBoxSelected(value, isCheck) {
    props.onCheckBoxSelected(value, isCheck);
  }

  return (
    <Wrapper>
      {props.contents.map((content) => (
        <CheckBox
          key={content.id}
          content={content}
          onCheckBoxSelected={handleCheckBoxSelected}
        />
      ))}
    </Wrapper>
  );
}
