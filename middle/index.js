const axios = require("axios").default
const fs = require("fs")
const { PdfReader } = require("pdfreader")

const reader = new PdfReader()

let pdf
const defaultCallback = (err, item) => {
    if (item && item.text) {
        pdf += item.text
    }
}

const readPdf = (file = "pdf/Obesity.pdf", callback = defaultCallback) => {
    const buffer = fs.readFileSync(file)
    reader.parseBuffer(buffer, callback)
}

const fetchPdf = () => {
    axios
        .get('http://localhost:3000/test', {
            responseType: 'arraybuffer',
        })
        .then((res) => {
            console.log(res) // res.data === Buffer.from(res.data) when 'responseType' is arraybuffer

            const decoded = res.data
            reader.parseBuffer(decoded, defaultCallback)

            fs.writeFile("./pdf/test.pdf", decoded, (err) => {
                if (err) console.error(err)
            })
        });
    }

const fetchEncodedPdf = () => {
    axios
        .get('http://localhost:3000/encoded', {
            responseType: 'text',
        })
        .then((res) => {
            console.log(res)

            const decoded = Buffer.from(res.data, 'base64') // Buffer instances are also TypedArray instances
            reader.parseBuffer(decoded, defaultCallback)

            fs.writeFile("./pdf/encoded-test.pdf", decoded, (err) => {
                if (err) console.error(err)
            })
        });
    }

// readPdf()
// fetchPdf()
// fetchEncodedPdf()