const ratesSchema = {
  "type": "object",
  "properties": {
    "date": {
      "type": "string"
    },
    "currencies": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "kurz": {
            "type": "number"
          },
          "kód": {
            "type": "string"
          },
          "měna": {
            "type": "string"
          },
          "země": {
            "type": "string"
          },
        }
      }
    }
  }
}

export default ratesSchema
