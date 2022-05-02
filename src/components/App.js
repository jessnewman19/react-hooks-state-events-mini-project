import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDelete (selectedTask) { 
    setTaskList(previousTaskList => previousTaskList.filter(task => task.text !== selectedTask))
  }

  function handleFilter(filteredTask) { 
    setTaskList(previousTaskList => previousTaskList.filter(task => task.category === filteredTask))
  }

  function taskFormSubmit (formItem) { 
    setTaskList([...taskList, formItem])
  }

  const visibleTasks = taskList.filter(task => (
    selectedCategory === "All" || task.category === selectedCategory
  ))

  return (
    <div className="App">
      <h2>My tasks</h2>
        <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSetSelectedCategory={setSelectedCategory}/> 
        <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={taskFormSubmit}/>
        <TaskList tasks={visibleTasks} onHandleDelete={handleDelete} onHandleFilter={handleFilter}/>
    </div>
  );
}

export default App;
