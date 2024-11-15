import { Outlet } from "react-router-dom"
import Header from "../components/Header"
function RootLayout() {
  return (
    <>
        <Header />
        <main className="max-w-7xl mx-auto">
        <Outlet />
        </main>
    </>
  )
}

export default RootLayout