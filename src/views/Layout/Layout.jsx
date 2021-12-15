import Header from "../../components/layout/Header";


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
