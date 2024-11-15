import Header from "../components/Header"

function Error() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-6xl font-bold text-stone-600">404! Page Not Found</h1>
      </div>
    </main>
  )
}

export default Error