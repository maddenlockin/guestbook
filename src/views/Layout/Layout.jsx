import Header from "../../components/layout/Header";
import React from 'react'


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout;