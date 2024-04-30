import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const Title = () => {
    const { incomeList } = useContext(GlobalContext)
    console.log('incomeList', incomeList);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 ">
                    <div className="bg-success display-2 d-flex justify-content-center align-items-center ">
                    Income
                    </div>
                </div>
                <div className="col-md-6">
                <div className="bg-danger display-2 d-flex justify-content-center align-items-center ">
                    Expense
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;