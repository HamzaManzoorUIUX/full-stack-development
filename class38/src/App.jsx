import { useEffect, useState } from "react";

const App = () => {
    const [apiData, setApiData] = useState({})
    const [counters, setCounters] = useState(0)
    const apiCall = () => {
        // Promise.then().catch()
        fetch("https://dummyjson.com/products").then((result) => {
            if (result.status === 200) {
                return result.text()
            }
            else {
                return Promise.reject(result.statusText)
            }
        }).then(res => {
            setApiData(JSON.parse(res))
        }).catch(err => { console.log('err', err) })
    }
    useEffect(() => {
        apiCall()
    }, [])
    console.log('apiData', apiData);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.products.map((obj, i) => <tr key={obj.id}>
                            <td>{i + 1}</td>
                            <td>{obj.brand}</td>
                            <td>{obj.category}</td>
                            <td>{obj.description}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default App;