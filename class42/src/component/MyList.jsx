import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const MyList = () => {
    const { incomeList } = useContext(GlobalContext)
    return (
        <div className='container'>
            {
                incomeList.map((item, index) => {
                    return (
                        <div key={index} className='d-flex'>
                            <div>
                                {item.desc}
                            </div>
                            <div>
                                {item.amount}
                            </div>
                            <div>
                                {item.type}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyList;