"use client"
import { Suspense, useState } from "react"
import { Row } from "./rows"

export const RandomTable = ({ initialRows }: { initialRows: Row[] }) => {
  const [rows, setRows] = useState(initialRows)

  return (
    <Suspense>
      <table>
        <thead>
          <tr>
            <th>
              Column 1{" "}
              <button
                onClick={() => {
                  const col = Math.floor(4 * Math.random())
                  const newRows = [...rows]
                  const reverse = Math.random() < 0.5 ? 1 : -1
                  newRows.sort(
                    (a, b) => reverse * a[col].text.localeCompare(b[0].text)
                  )
                  setRows(newRows)
                }}
              >
                ⬆️⬇️
              </button>
            </th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell.text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Suspense>
  )
}
