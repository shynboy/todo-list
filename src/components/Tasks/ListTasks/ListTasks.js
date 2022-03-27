import React from "react";
import Wrapper from "../../Utilities/Wrapper";
import Task from "../Task/Task";
import "./ListTasks.module.css";
export default function ListTasks(props) {
  return (
    <Wrapper>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Wrapper>
  );
}
