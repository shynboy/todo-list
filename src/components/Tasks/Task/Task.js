import React from "react";
import "./Task.module.css";
export default function Task(props) {
  return (
    <div>
      <h2>{props.task.name}</h2>
      <label>{props.task.status}</label>
      <label>{props.task.active.toString()}</label>
    </div>
  );
}
