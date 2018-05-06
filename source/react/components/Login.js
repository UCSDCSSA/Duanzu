/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            modalIsOpen: true
        };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        var buttonStyle = {
          "color": "black",
          "cursor": "pointer"
        }

        var loginStyle= {
            "textDecorationLine": "underline"
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

        return (
            <div>
             <Modal open={this.state.modalIsOpen} onClose={this.closeModal} center>
                <Row style={{marginTop: '5%'}}>
                    <Col offset="l4" s={4}>
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

                            <hr/>

                            <Row>
                                { loginDisplay(this.state.login) }
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Modal>
            </div>
        );
    }
};

export default Login;
//ReactDOM.render(<Login />, document.getElementById('login'));
