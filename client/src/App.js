import Axios from "axios"
import fileDownload from "js-file-download"

export function App() {
    const URL = "http://localhost:3000/test"
    
    const fetchBinary = () => {
        Axios.get(URL, {
            responseType: 'blob',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {
            fileDownload(res.data, "parcel-test.pdf")
        })
    }

    return (
        <div>
            <h1>Hello world!</h1>
            <button onClick={fetchBinary}>Fetch!</button>
        </div>
    );
}
