export type Labels = string[]

export type Entry = {
  readonly rate: number
  readonly currencyCode: string
  readonly amount: number
  readonly currency: string
  readonly country: string
}

export type Data = {
  readonly date: string
  readonly labels: Labels
  readonly entries: Entry[]
}