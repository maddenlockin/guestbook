import { UserProvider } from "./context/UserContext";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import React from "react";

export default function App() {
  return (
    <UserProvider>
      <Layout>
        <Home />
      </Layout>
    </UserProvider>
  );
}
