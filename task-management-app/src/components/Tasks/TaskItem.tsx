import React from 'react';
import { useTasks } from '../../context/TaskContext';
import './Tasks.css';

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { removeTask } = useTasks();

  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
