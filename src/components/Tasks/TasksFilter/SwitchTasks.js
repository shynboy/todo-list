import React, { isValidElement } from "react";
import SwitchButton from "../../UI/SwitchButton";

const activeTasks = (tasks = [], isActive) => {
  const result = tasks.filter((task) => task.active === isActive);
  return result;
};

export default function SwitchTasks(props) {
  function handleSwitchActive(isActive) {
    const data = !isActive ? props.tasks : activeTasks(props.tasks, isActive);
    props.onHandleActiveTasks(data);
  }

  return <SwitchButton onSwitchActive={handleSwitchActive} />;
}
