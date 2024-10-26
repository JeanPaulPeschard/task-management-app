import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-to-call.com/endpoint',
});

export const fetchTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const addTask = async (task: { title: string; completed: boolean }) => {
  const response = await api.post('/tasks', task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  await api.delete(`/tasks/${id}`);
};
