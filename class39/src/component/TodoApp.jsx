import React, { useState } from 'react';

const TodoApp = () => {
    const [counter, setCounter] = useState(Number.parseInt(localStorage.getItem('counter')||'0'))
    return (
        <div style={{width:"600px",padding:'50px',background:"red"}}>
            {counter}
            <button onClick={() => {
                setCounter(counter + 1)
                localStorage.setItem('counter', counter + 1)
            }}>
                add data
            </button>
        </div>
    );
};

export default TodoApp;