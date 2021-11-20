import type { NextApiRequest, NextApiResponse } from "next"
import { validate } from "jsonschema"

import schema from "./schema"
import type { Data } from "../../../types"

// response text is expected in the documented format:
// https://www.cnb.cz/cs/casto-kladene-dotazy/Kurzy-devizoveho-trhu-na-www-strankach-CNB/
const parseResponseText = (text: string): Data => {
  const [headerRow, labelsRow, ...currencies] = text.split("\n").filter(Boolean)
  const [date] = headerRow.replace(/\./g, ".\xa0").split(" ")
  const labels = labelsRow.split("|")
  const entries = currencies
    .map((line) => line.split("|"))
    .map((entry) => ({
      country: entry[0],
      currency: entry[1],
      amount: parseInt(entry[2], 10),
      currencyCode: entry[3],
      rate: parseFloat(entry[4].replace(",", ".")),
    }))
  return { date, labels, entries }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  const ratesResponse = await fetch(
    "https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt",
  )
  const text = await ratesResponse.text()
  const data = parseResponseText(text)
  const validationResult = validate(data, schema)
  if (validationResult.errors.length) {
    res.status(500).send("Invalid API data")
  }
  res.json(JSON.stringify(data))
}