/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Home;
