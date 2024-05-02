import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          Hello user this is Home page  
          <Link to="/aboutus">
            About us page
          </Link>
        </div>
    );
};

export default Home;