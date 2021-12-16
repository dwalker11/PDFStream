const fs = require("fs")
const { PdfReader } = require("pdfreader")


let pdf
const defaultCallback = (err, item) => {
    if (item && item.text) {
        pdf += item.text
    }
}

const reader = new PdfReader()
const readPdf = (file = "Obesity.pdf", callback = defaultCallback) => {
    const buffer = fs.readFileSync(file)
    reader.parseBuffer(buffer, callback)
}

module.exports = readPdf