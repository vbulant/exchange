import type { NextApiRequest, NextApiResponse } from "next"

import type { Data } from "../../types"

const parseResponseText = (text: string): Data => {
  const [headerRow, labelsRow, ...currencies] = text.split("\n").filter(Boolean)
  const [date] = headerRow.replace(/\./g, ".\xa0").split(" ")
  const labels = labelsRow.split("|")
  const entries = currencies
    .map((line) => line.split("|"))
    .map((entry) =>
      entry.reduce((acc, value, index) => {
        return {
          ...acc,
          [labels[index]]: value,
        }
      }, {}),
    )
  return { date, labels, entries }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  const ratesResponse = await fetch(
    "https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt",
  )
  const text = await ratesResponse.text()
  const data = parseResponseText(text)
  res.json(JSON.stringify(data))
}
