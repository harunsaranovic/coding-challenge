import './tailwind.output.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login/Login.tsx';
import Register from './components/Register/Register.tsx';
import Dashboard from './components/Dashboard/Dashboard.tsx'; 
import AuthService from './services/AuthService.js'; 
import axios from 'axios';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  useEffect(() => {
    const token = AuthService.getCurrentToken();
    if (token) {
      setShowDashboard(true);
    }
  }, []);

  axios.defaults.headers.common.Accept = 'application/json';
  if (localStorage.getItem('access_token')){
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
  }

  return (
    <div className="App">
        <Switch>
        <Route exact path="/">
          {localStorage.getItem('apiKey') ? <Redirect to="/home" /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/login" component={Login} /> 
        <Route path="/register" component={Register} /> 

        <Route exact path="/dashboard"
          component={() => <Dashboard key={'dashboard'} comp={'dashboard'} />}
          />
        <Route exact path="/home"
          component={() => <Dashboard key={'home'} comp={'home'} />}
          />
        <Route exact path="/user/:userId"
          component={() => <Dashboard key={'user'} comp={'user'} />}
        />

        </Switch>
    </div>
  );
}

export default App;
