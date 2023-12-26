import Home from "./Home"
import Table from "./Table"

export default function App() {
  return (
    <>
      <header>
        <button onClick={() => (window.location.pathname = "/")}>Home</button>
        <button onClick={() => (window.location.pathname = "/table")}>
          Table
        </button>
      </header>

      {window.location.pathname === "/table" ? <Table /> : <Home />}
    </>
  )
}
