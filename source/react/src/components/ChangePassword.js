// @flow

/**
 * @author: Tianyang Lu Xuran Liu
 * @date: 2017/11/11
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';
import Header from './Header';
import LeasingCard from './LeasingCard';


class ChangePassword extends React.Component {
    render() {
        return (
          <div>
            <Header/>
            <Row>
                <Col offset="l4" s={4}>
                    <Card>
                        <center>
                            <h5>更改密码</h5>
                        </center>
                        <Input s={12} type="password" label="输入旧密码"/>
                        <Input s={12} type="password" label="新密码"/>
                        <Input s={12} type="password" label="确认新密码"/>

                        <center>
                            <Button waves='light' s={12}>确认</Button>
                        </center>
                    </Card>
                </Col>
            </Row>
           </div>
        );
    }
};

export default ChangePassword;
