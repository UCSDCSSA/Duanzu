import React from 'react';

import {Link} from 'react-router-dom';
import {Navbar, NavItem, Card, Row, Col, Input, Button} from 'react-materialize';
// import Login from './Login';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true,
            opened: false
        };
    }

    toggle() {
        if(this.state.opened) {
            console.log("close");
            this.setState({opened: false});
        } else {
            console.log("open");
            this.setState({opened: true});
        }
    }

    render() {

        function loginDisplay(login) {
            if(!login) {
                return(
                    <div>
                        <Input s={12} label="用户名"/>
                        <Input s={12} type="email" label="邮箱"/>
                        <Input s={12} type="password" label="密码"/>
                        <Input s={12} type="password" label="确认密码"/>
                        <center>
                        <Button waves='light' s={12}>注册账号</Button>
                        </center>
                    </div>
                );
            } else {
                return(
                    <div>
                        <Input s={12} label="用户名/邮箱"/>
                        <Input s={12} type="password" label="密码"/>
                        <center>
                            <Button waves='light' s={12}>登录</Button>
                        </center>
                    </div>
                );
            }
        }

        var navStyle = {
            width: "100%",
            height: "60px",
            backgroundColor: "rgba(186, 0, 0, 1)",
            display: "flex",
            zIndex: "1000000",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)"
        };

        var navLeftStyle = {
            display: "flex"
        };

        var navRightStyle = {
            flexGrow: "1000000",
            flexFlow: "row-reverse",
            display: "flex"
        };

        var navRightItemStyle = {
            "lineHeight": "60px",
            "padding": "0 15px"
        }

        var buttonStyle = {
            "color": "black",
            "cursor": "pointer"
        };

        var loginStyle= {
            "width": "50%",
            "height": "60%",
            "backgroundColor": "white"
        };

        var maskStyle = {
            "position": "fixed",
            "width": "100%",
            "height": "100%",
            "left": "0",
            "top": "0",
            "backgroundColor": "rgba(0,0,0,0.5)",
            "alignItems": "center",
            "justifyContent": "center",
            "display": this.state.opened ? "flex" : "none",
            "zIndex": "1"
        }

        return (
            <div>
                <nav style={navStyle}>
                    <div style={navLeftStyle}>
                        <a style={navRightItemStyle} href="/">UCSD CSSA 短租平台</a>
                    </div>
                    <div style={navRightStyle}>
                        <a style={navRightItemStyle} onClick={()=> this.toggle()}>登陆</a>
                        <a style={navRightItemStyle} href="/searchpage">搜索房源</a>
                        <a style={navRightItemStyle} href="/publish">发布房源</a>
                    </div>
                </nav>
                <div style={maskStyle} onClick={()=> this.toggle()}>
                    <div style={loginStyle} onClick={(e) => e.stopPropagation()} >
                        <center>
                            <Card>
                                <Row >
                                    <Col style={{width:'50%'}}>
                                        <center>
                                            <a style={buttonStyle} onClick={ () => {
                                                this.setState( {
                                                        login: true
                                                });
                                            } }>
                                                <h5>登录</h5>
                                            </a>
                                        </center>
                                    </Col>

                                    <Col style={{width:'50%'}}>
                                        <center>
                                            <a style={buttonStyle} onClick={ () => {
                                                this.setState( {
                                                        login: false
                                                });
                                            } }>
                                                <h5>注册</h5>
                                            </a>
                                        </center>
                                    </Col>
                                </Row>
                                <Row>
                                    { loginDisplay(this.state.login) }
                                </Row>
                            </Card>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;
