/**
 * @author: Liby Lee
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import { Input, Button, Card, Row, Col, Icon } from 'react-materialize';
import Header from './Header';




class Publish extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Row>
                        <Col s={12}>
                            <Card>
                            <h3 align="center">
                                发布信息
                            </h3>
                                <Row>
                                	<Input s={6} label="姓" validate><Icon>account_circle</Icon></Input>
                                    <Input s={6} label="名" validate><Icon>account_circle</Icon></Input>
                                </Row>
                                <Row>
                                	<Input s={6} type='select' label="性别" icon='wc' defaultValue='2'>
                                		<option value='1'>男</option>
                                		<option value='2'>女</option>
                                	</Input>
                                    <Input s={6} label="电话号码" validate type='tel'><Icon>phone</Icon></Input>
                                </Row>
                                <Row>
                                	<Input s={6} label="开始日期" name='on' type='date' onChange={function(e, value) {}}><Icon>date_range</Icon></Input>
                                    <Input s={6} label="结束日期" name='on' type='date' onChange={function(e, value) {}}><Icon>date_range</Icon></Input>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

export default Publish;
