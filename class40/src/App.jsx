import React, { useState } from 'react';
import Input from './component/Input';

const App = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    return (
        <div>
            <Input title="Title" inputValue={title} inputChange={setTitle} />
            <Input title="description" inputValue={desc} inputChange={setDesc} />
            <button type='button' onClick={() => {
                console.log("title", { title, desc });
                setDesc("")
                setTitle("")
            }}>CLick me</button>
        </div>
    );
};

export default App;