import React, { useState } from 'react';
import Home from './Pages/Home';

const App = () => {
    const [navColor, setNavColor] = useState(false)
    return (
        <div>
            <Home xyz={navColor}/>
            <button className='btn btn-danger' onClick={() => setNavColor(!navColor)}>
                {navColor? 'Close' : 'Open'}
            </button>
        </div>
    );
};

export default App;