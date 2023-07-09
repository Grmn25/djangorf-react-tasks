import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/tasks/",
});

export const getAllTasks = () => {
  tasksApi.get("/");
};

export const createTask = (task) => {
  tasksApi.post("/", task);
};
