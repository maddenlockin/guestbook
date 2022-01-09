import React from 'react';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';
import { ProvideAuth } from './context/ProvideAuth';
import PrivateRoute from './components/Entry/PrivateRoute/PrivateRoute';
import Login from './views/Auth/Login';

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </ProvideAuth>
  );
}

