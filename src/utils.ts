const userLanguages =
  typeof window !== "undefined" ? Array.from(window.navigator.languages) : "cs"

export const formatNumber = (number: number) => number.toLocaleString(userLanguages)

export const formatDate = (date: string) => new Date(date).toLocaleDateString(userLanguages)
