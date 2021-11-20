const ratesSchema = {
  "type": "object",
  "properties": {
    "date": {
      "type": "string"
    },
    "labels": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "entries": {
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
          "množství": {
            "type": "number"
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
