import { useState } from "react";

const App = () => {
    const [apiData,setApiData] =useState({})
    const apiCall = () => {
        // Promise.then().catch()
        fetch("https://dummyjson.com/products").then((result) => {
            if(result.status===200){
                return result.text()
            }
            else{
                return Promise.reject(result.statusText)
            }
        }).then(res=>{
            setApiData(JSON.parse(res))
        }).catch(err => { console.log('err', err) })
    }
    apiCall()
    console.log('apiData',apiData);
    return (
        <div>
            sample
        </div>
    );
};

export default App;