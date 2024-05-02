import { createContext, useState } from "react";
const initialState = {
    incomeList: [],
}
const GlobalContext = createContext(initialState)
const {Provider}=GlobalContext
const GlobalProvider = ({ children }) => {
    const [incomeList, setIncomeList] = useState([])
    const saveData = (data) => {
        setIncomeList([...incomeList, data])
    }
    return <Provider value={{ ...initialState, incomeList, saveData }}>
        {children}
    </Provider>
}
export { GlobalProvider, GlobalContext }