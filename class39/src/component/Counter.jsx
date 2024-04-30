import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const myInterval = setInterval(() => {
            setCounter((pre) => {
                return pre + 1
            })
            if (counter === 100) {
                clearInterval(myInterval)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    }, [])
    console.log("hello world", counter);
    return (
        <div>
            {counter}
        </div>
    );
};

export default Counter;