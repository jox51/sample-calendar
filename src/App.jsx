import DatePicker from "./components/DatePicker"

function App() {
  return (
    <main className="h-screen flex justify-center items-center m-6">
      <div>
        <h1 className="text-center text-2xl">Appt Tracker</h1>
        <DatePicker />
      </div>
    </main>
  )
}

export default App
