import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import React from "react";
import { ProvideAuth } from "./context/ProvideAuth";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/guestbook'>
          <Layout>
            <Home />
          </Layout>
        </PrivateRoute>
      </Router>
    </ProvideAuth>
  );
}

{/* <Layout>
  <Home />
</Layout>; */}