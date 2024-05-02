import React, { useContext, useState } from 'react';
import Input from './Input';
import { GlobalContext } from '../Context/GlobalContext';

const Form = () => {
    const { saveData } = useContext(GlobalContext)
    const [details, setDetails] = useState({
        amount: 0,
        desc: "",
        type: "income",
    })
    // console.log('details', details);
    return (
        <div className='container'>
            <Input title={"Amount"} inputValue={details.amount} inputChange={e => setDetails({ ...details, amount: e })} />
            <Input title={"Description"} inputValue={details.desc} inputChange={e => setDetails({ ...details, desc: e })} />
            <Input title={"type"} inputValue={details.type} inputChange={e => setDetails({ ...details, type: e })} />
            <button type='button' onClick={() =>{
                saveData(details)
                setDetails({
                    amount: 0,
                    desc: "",
                    type: "income",
                })
            }}>
                Save Data
            </button>
        </div>
    );
};

export default Form;