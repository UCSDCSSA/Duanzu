/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';

//Modal.setAppElement(document.getElementById('login'))
class Login extends React.Component {
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

        function modalDisplay(modalIsOpen) {
            if (modalIsOpen) {
                return(
                    <div>
                    </div>
                )
            }
        }

        return (
            <div >
                <a style={buttonStyle} onClick={()=> this.toggle()}>登陆</a>
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

export default Login;
