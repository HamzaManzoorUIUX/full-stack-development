import React from 'react';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

const Home = ({navColor}) => {
    return (<>
        <NavBar navColor={navColor} />
        <Header />
    </>);
};

export default Home;