import React from 'react';
import { GlobalProvider } from './Context/GlobalContext';
import Title from './component/Title';
import "./assets/scss/main.scss"
import Form from './component/Form';
import MyList from './component/MyList';
const App = () => {
    return (
        <GlobalProvider>
            <Title />
            <Form/>
            <MyList/>
        </GlobalProvider>
    );
};

export default App;