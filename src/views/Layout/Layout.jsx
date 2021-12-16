import Header from "../../components/layout/Header";
import React from 'react'


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
