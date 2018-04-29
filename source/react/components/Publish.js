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
                                基本信息
                            </h3>
                            <Row>
                                <Input s={6} label="姓名" validate="validate">
                                    <Icon>account_circle</Icon>
                                </Input>
                                <Input s={6} label="微信号" validate="validate">
                                    <Icon>chat</Icon>
                                </Input>
                            </Row>
                            <Row>
                                <Input s={6} label="邮箱" validate="validate">
                                    <Icon>email</Icon>
                                </Input>
                                <Input s={6} label="电话号码" validate="validate" type='tel'>
                                    <Icon>phone</Icon>
                                </Input>
                            </Row>
                            <Row>
                                <h3 align="center">
                                    房屋信息
                                </h3>
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
                                <Input s={6} type='select' label="租客性别" icon='wc' defaultValue='3'>
                                    <option value='1'>男</option>
                                    <option value='2'>女</option>
                                    <option value='3'>男/女</option>
                                </Input>
                            </Row>
                            <Row>
                                <Input s={12} label="地址" validate="validate" type='text'>
                                    <Icon>add_location</Icon>
                                </Input>
                            </Row>
                            <Row>
                                <div class="input-field col s12">
                                     <i class="material-icons prefix">mode_edit</i>
                                     <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                     <label for="icon_prefix2">房屋简介</label>
                                </div>
                            </Row>
                            <Row>
                                <div class="input-field col s12">
                                     <i class="material-icons prefix">mode_edit</i>
                                     <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                     <label for="icon_prefix2">注意事项</label>
                                </div>
                            </Row>
                            <div style={{marginLeft: '10px'}}>
                                <Row>
                                    <Col s={6}>
                                        <i class="small material-icons" style={{float: 'left', marginRight: '15px'}}>event_available</i>
                                        <h5>可用设施（室内）</h5>
                                    </Col>
                                    <Col s={6}>
                                        <i class="small material-icons" style={{float: 'left', marginRight: '15px'}}>event_available</i>
                                        <h5>可用设施（小区及附近）</h5>
                                    </Col>
                                </Row>
                                <div style={{marginLeft: '20px'}}>
                                    <Row>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Col s={2}></Col>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={4} type="checkbox" label="Red">
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Col s={2}></Col>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={4} type="checkbox" label="Red">
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Col s={2}></Col>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={4} type="checkbox" label="Red">
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Col s={2}></Col>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={4} type="checkbox" label="Red">
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Col s={2}></Col>
                                        <Input s={2} type="checkbox" label="Red">
                                        </Input>
                                        <Input s={4} type="checkbox" label="Red">
                                        </Input>
                                    </Row>
                                    <Row>
                                        <div className="col s5">
                                            Other:
                                            <div className="input-field inline">
                                                <input className="validate"></input>
                                            </div>
                                        </div>
                                        <Col s={1}></Col>
                                        <div className="col s4">
                                            Other:
                                            <div className="input-field inline">
                                                <input className="validate"></input>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <div style={{marginLeft: '20px'}}>
                                <Row>
                                    <i class="small material-icons" style={{float: 'left', marginRight: '15px'}}>insert_photo</i>
                                    <h5>添加照片</h5>
                                </Row>
                                <Row>
                                <div className="file-field input-field col s6">
                                  <div class="btn">
                                    <span><Icon>add_a_photo</Icon></span>
                                    <input type="file"/>
                                  </div>
                                  <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text"/>
                                  </div>
                                </div>
                                </Row>
                            </div>
                            <br/>
                            <Row>
                                <div className="center">
                                    <button className='btn waves-effect waves-light btn-large' type="submit" name="action" onClick={this.handleClick}>
                                        Submit
                                    <i className="material-icons right">send</i>
                                    </button>
                                    <button className='btn waves-effect waves-light btn-large' type="submit" name="action" onClick={this.handleClick}>
                                        Submit
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
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
