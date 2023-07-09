import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";7


export const TasksList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
	async function loadTasks() {
	  const res = await getAllTasks()
	  setTasks(res.data)
	}
	loadTasks()
      }, []);

  return <div>
	  {tasks.map(task => (
		<TaskCard task={task} key={task.id}/>
	  ))} 
	  </div>;
};
