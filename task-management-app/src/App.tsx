import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Login from './components/Auth/Login';
import TaskList from './components/Tasks/TaskList';
import AddTask from './components/Tasks/AddTask';
import Navbar from './components/UI/Navbar';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/tasks">
              <AddTask />
              <TaskList />
            </Route>
            <Route path="/" exact component={Login} />
          </Switch>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
