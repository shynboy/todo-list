import React, { useEffect, useState } from "react";
import ListCheckBoxes from "../../UI/ListCheckBoxes";
import Wrapper from "../../Utilities/Wrapper";
const tasksContent = (tasks = []) => {
  let contents = [];
  for (let i = 0; i < tasks.length; i++) {
    contents.push({ id: "content_" + tasks[i].id, name: tasks[i].name });
  }
  return contents;
};

const tasksStatus = (tasks = []) => {
  let statuses = [];
  for (let i = 0; i < tasks.length; i++) {
    if (isDuplicate(statuses, tasks[i]) === false) {
      statuses.push({ id: tasks[i].id, name: tasks[i].status });
    }
  }
  return statuses;
};

const isDuplicate = (array = [], value = {}) => {
  let duplicate = false;
  for (let i = 0; i < array.length; i++) {
    console.log(`Task status : ${array[i].id} ---- value ${value.id}`);
    if (array[i].name === value.status) {
      duplicate = true;
      break;
    }
  }
  console.log(duplicate);
  return duplicate;
};

const taskFilter = (tasks = [], filterByContent = [], filterByStatus = []) => {
  const content = filterByContent.map((x) => x.name);
  const _status = filterByStatus.map((x) => x.name);

  const result = tasks.filter(
    ({ name, status }) => content.includes(name) || _status.includes(status)
  );
  return result;
};
export default function TaskFilter(props) {
  const [filterByContent, setFilterByContent] = useState([]);
  const [filterByStatus, setFilterByStatus] = useState([]);
  const STATUSES = tasksStatus(props.tasks);
  const CONTENTS = tasksContent(props.tasks);
  function handleContentFilter(content = {}, isCheck) {
    isCheck
      ? setFilterByContent((prev) => {
          return [...prev, content];
        })
      : setFilterByContent((prev) => {
          const contents = prev.filter((ct) => ct.id !== content.id);
          return contents;
        });
  }
  function handleStatusFilter(content, isCheck) {
    isCheck
      ? setFilterByStatus((prev) => {
          return [...prev, content];
        })
      : setFilterByStatus((prev) => {
          const statuses = prev.filter((st) => st.id !== content.id);
          return statuses;
        });
  }

  useEffect(() => {
    props.onTaskFiltered(
      taskFilter(props.tasks, filterByContent, filterByStatus)
    );
  }, [filterByContent, filterByStatus]);

  return (
    <Wrapper>
      <h2>Filter By Content</h2>
      <ListCheckBoxes
        onCheckBoxSelected={handleContentFilter}
        contents={CONTENTS}
      />
      <h2>Filter By Status</h2>
      <ListCheckBoxes
        onCheckBoxSelected={handleStatusFilter}
        contents={STATUSES}
      />
    </Wrapper>
  );
}
