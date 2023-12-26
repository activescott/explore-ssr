import { RandomTable } from "../../components/RandomTable"
import { randomRows } from "../../components/rows"

const initialRows = randomRows()

export default function Page() {
  return (
    <main>
      <h1>Table</h1>
      <RandomTable initialRows={initialRows} />
    </main>
  )
}
