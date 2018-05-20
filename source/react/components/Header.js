import React from 'react';

import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import Login from './Login';

class Header extends React.Component {

    toggleLogin() {
        console.log("toggle login");
    }

    render() {

        var navStyle = {
            width: "100%",
            height: "45px",
            backgroundColor: "rgba(120, 120, 120, 1)",
            display: "flex",
            zIndex: "1000000"
        };

        var navLeftStyle = {
            display: "flex"
        };

        var navRightStyle = {
            flexGrow: "1000000",
            flexFlow: "row-reverse",
            display: "flex"
        };

        var buttonStyle = {
          "color": "black",
          "cursor": "pointer"
      };

        return (
            <div>
                <nav style={navStyle}>
                    <div style={navLeftStyle}>

                    </div>
                    <div style={navRightStyle}>
                        <a href="/#/leasing/view">view</a>
                        <a href="/#/">home</a>
                        <a href="/#/searchpage">search</a>
                        <a href="/#/publish">publish</a>
                        <Login/>
                    </div>
                </nav>
            </div>

        );
    }
};

export default Header;
