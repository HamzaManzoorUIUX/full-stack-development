import React from 'react';

const Input = ({ title, inputValue, inputChange }) => {
    return (
        <div>
            <div>
                {title}
            </div>
            <input type="text" value={inputValue} onChange={(e) => inputChange(e.target.value)} />
        </div>
    );
};

export default Input;