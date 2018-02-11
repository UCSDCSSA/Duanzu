/**
 * @author: Liby Lee
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {
    Input,
    Button,
    Card,
    Row,
    Col,
    Icon
} from 'react-materialize';
import Header from './Header';

class Publish extends React.Component {

    handleClick (){
        window.location.href = '/#/display'
    }
    render() {
        return (<div>
            <Header/>
            <div className="container">
                <Row>
                    <Col s={12}>
                        <Card>
                            <h3 align="center">
                                发布信息
                            </h3>
                            <Row>
                                <Input s={6} label="姓" validate="validate">
                                    <Icon>account_circle</Icon>
                                </Input>
                                <Input s={6} label="名" validate="validate">
                                    <Icon>account_circle</Icon>
                                </Input>
                            </Row>
                            <Row>
                                <Input s={6} type='select' label="租客性别" icon='wc' defaultValue='3'>
                                    <option value='1'>男</option>
                                    <option value='2'>女</option>
                                    <option value='3'>男/女</option>
                                </Input>
                                <Input s={6} label="电话号码" validate="validate" type='tel'>
                                    <Icon>phone</Icon>
                                </Input>
                            </Row>
                            <Row>
                                <Input s={6} label="开始日期" name='on' type='text' id='startDate' className='datepicker' onClose={function(e, value) {}}>
                                    <Icon>date_range</Icon>
                                </Input>
                                <Input s={6} label="结束日期" name='on' type='text' id='endDate' className='datepicker' onChange={function(e, value) {}}>
                                    <Icon>date_range</Icon>
                                </Input>
                            </Row>
                            <Row>
                                <Input s={6} label="小区" validate="validate" type='select' icon='home'>
                                    <option value='1'>CV</option>
                                    <option value='2'>IG</option>
                                    <option value='3'>360</option>
                                </Input>
                                <Input s={6} label="门牌号" validate="validate" type='text'>
                                    <Icon>local_hotel</Icon>
                                </Input>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>

            <button className='btn waves-effect waves-light' type="submit" name="action" onClick={this.handleClick}>
            Submit
            <i className="material-icons right">send</i>
            </button>
        </div>

        // <a href='/#/leasing/view'> change </a>

    );
    }


    componentDidMount() {


        $('#startDate').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false, // Close upon selecting a date,
            min: new Date()
        });
        $('#endDate').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false, // Close upon selecting a date,
            min: 1
        });

    }
};

export default Publish;
