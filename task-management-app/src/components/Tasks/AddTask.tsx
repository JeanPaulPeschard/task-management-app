import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import './Tasks.css';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, completed: false };
    addTask(newTask);
    setTitle('');
  };

  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        <input type="text" placeholder="New Task" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
