/**
 * @author: Liby Lee
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';
import Header from './Header';

class Register extends React.Component {
    render() {
        return (<div>
            <Header/>
            <Row>
                <Col offset="l4" s={4}>
                    <Card>
                        <center>
                            <h5>注册</h5>
                        </center>
                        <Input s={12} label="用户名"/>
                        <Input s={12} type="email" label="邮箱"/>
                        <Input s={12} type="password" label="密码"/>
                        <Input s={12} type="password" label="确认密码"/>
                        <center>
                            <Button waves='light' s={12}>注册账号</Button>
                        </center>
                    </Card>
                </Col>
            </Row>
        </div>);
    }
};

export default Register;
