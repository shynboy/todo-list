import "./App.css";
import { useState } from "react";
import Wrapper from "./components/Utilities/Wrapper";
import ListTasks from "./components/Tasks/ListTasks/ListTasks";
import TaskFilter from "./components/Tasks/TasksFilter/TaskFilter";

function App() {
  const todoList = [
    {
      id: 1,
      name: "task name 1",
      status: "done",
      active: true,
    },
    {
      id: 2,
      name: "task name2",
      status: "in progress",
      active: true,
    },
    {
      id: 3,
      name: "task name 3",
      status: "not yet start",
      active: true,
    },
    {
      id: 4,
      name: "task name 4",
      status: "in progress",
      active: true,
    },
    {
      id: 5,
      name: "task name 5",
      status: "in progress",
      active: true,
    },
  ];
  const [taskFiltered, setTaskFiltered] = useState([]);

  function handleTaskFilter(tasks) {
    setTaskFiltered(tasks);
  }

  return (
    <Wrapper>
      <TaskFilter tasks={todoList} onTaskFiltered={handleTaskFilter} />
      <ListTasks tasks={taskFiltered.length === 0 ? todoList : taskFiltered} />
    </Wrapper>
  );
}

export default App;
