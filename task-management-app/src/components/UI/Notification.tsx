import React from 'react';
import { toast } from 'react-toastify';

const Notification: React.FC<{ message: string }> = ({ message }) => {
  toast(message);
  return null;
};

export default Notification;
