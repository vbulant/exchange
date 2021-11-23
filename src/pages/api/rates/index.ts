import type { NextApiRequest, NextApiResponse } from "next"
import { validate } from "jsonschema"

import schema from "./schema"
import type { Data } from "../../../types"

const parseDate = (date: string): string => {
  const [day, month, year] = date.split(".")
  return `${year}-${month}-${day}`
}

// response text is expected in the documented format:
// https://www.cnb.cz/cs/casto-kladene-dotazy/Kurzy-devizoveho-trhu-na-www-strankach-CNB/
const parseResponseText = (text: string): Data => {
  const [headerRow, , ...currenciesRows] = text.split("\n").filter(Boolean)
  const [rawDate] = headerRow.split(" ")
  const currencies = currenciesRows
    .map((line) => line.split("|"))
    .map((currency) => ({
      country: currency[0],
      currency: currency[1],
      currencyCode: currency[3],
      rate: parseFloat(currency[4].replace(",", ".")) / parseInt(currency[2], 10),
    }))
  return {
    date: parseDate(rawDate),
    currencies,
  }
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
