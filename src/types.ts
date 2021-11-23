export type Entry = {
  readonly rate: number
  readonly currencyCode: string
  readonly currency: string
  readonly country: string
}

export type Data = {
  readonly date: string
  readonly entries: Entry[]
}
