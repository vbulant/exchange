const fetchRates = async () => {
  const response = await fetch("/api/rates")
  if (!response.ok) {
    console.log("response", response)
    throw new Error(`Not OK ${response.statusText}`)
  }
  return response.json()
}

export default fetchRates
