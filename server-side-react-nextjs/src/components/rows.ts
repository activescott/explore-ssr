import { generate } from "random-words"

function randomString(seed: string, wordsPerString = 2): string {
  return generate({ exactly: 1, separator: " ", wordsPerString, seed })[0]
}

export function randomRows(): Array<Row> {
  return Array.from({ length: 50 }).map((_, row) => {
    return Array.from({ length: 4 }).map((_, col) => ({
      text: randomString(row.toString() + col.toString()),
      extra: randomString(
        (1000 * row).toString() + (2000 * col).toString(),
        50
      ),
    })) as Row
  })
}

export type Cell = { text: string; extra?: string }
export type Row = [Cell, Cell, Cell, Cell]
