import "./App.css";
import { useState } from "react";
import Wrapper from "./components/Utilities/Wrapper";
import ListTasks from "./components/Tasks/ListTasks/ListTasks";
import TaskFilter from "./components/Tasks/TasksFilter/TaskFilter";
import SwitchTasks from "./components/Tasks/TasksFilter/SwitchTasks";
const todoList = [
  {
    id: 1,
    name: "task name 1",
    status: "done",
    active: false,
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
    active: false,
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
function App() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [taskFiltered, setTaskFiltered] = useState([]);

  function handleTaskFilter(tasks) {
    setTaskFiltered(tasks);
  }

  function handleActiveTasks(tasks) {
    setActiveTasks(tasks);
  }
  return (
    <Wrapper>
      <SwitchTasks tasks={todoList} onHandleActiveTasks={handleActiveTasks} />
      <TaskFilter tasks={activeTasks} onTaskFiltered={handleTaskFilter} />
      <ListTasks
        tasks={
          taskFiltered.length === 0 || activeTasks.length === 0
            ? activeTasks
            : taskFiltered
        }
      />
    </Wrapper>
  );
}

export default App;
