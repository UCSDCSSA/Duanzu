/**
 * @author: Yiyang Yin
 * @date: 2017/11/12
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-materialize'
import Header from './Header';
import Axios from 'axios';

class PopUpSample extends React.Component {

    constructor () {
        super();
        this.toggle = this.toggle().bind(this);
        this.state = {
            opened: false
        };
    }

    toggle() {
        if (this.state.opened) {
            console.log("close");
            this.setState({ opened: false });
        }
        else {
            console.log("open");
            this.setState({ opened: true });
        }
    }

    render() {

        var maskStyle = {
            "position": "fixed",
            "width": "100%",
            "height": "100%",
            "top": "0",
            "backgroundColor": "rgba(0, 0, 0, 0.3)",
            "alignItems": "center",
            "justifyContent": "center",
            "display": this.state.opened ? "flex" : "none"
        }

        var loginStyle = {
            "width": "300px",
            "height": "300px",
            "backgroundColor": "white"
        }

        return (
            <div>
                <button onClick={this.toggle}>Toggle Popup</button>
                <div style={maskStyle} onClick={this.toggle}>
                    <div style={loginStyle} onClick={(e) => e.stopPropagation()}>
                        <center>
                            <div style={{ "display": "flex" }}>
                                <h5>Login</h5>
                                <span onClick={this.toggle}>x</span>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
};

export default PopUpSample;
