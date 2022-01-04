import { UserProvider } from "./context/UserContext";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import React from "react";
import { ProvideAuth } from "./context/ProvideAuth";

export default function App() {
  return (
    <ProvideAuth>
      <Layout>
        <Home />
      </Layout>
    </ProvideAuth>
  );
}
