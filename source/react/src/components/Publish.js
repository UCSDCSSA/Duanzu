/**
 * @author: Liby Lee
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';
import Sticky from 'react-sticky-el';
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
import ImageUploader from './ImageUploader'

class Publish extends React.Component {

    handleClick (){
        window.location.href = '/#/display'
    }
    render() {

        var publishButton = {
            'width': '95%'
        };

        var inputLine = {
            'width': '250px'
        };

        var photoButton = {
          'paddingTop': '50px',
          'paddingBottom': '100px',
          'borderRadius': '0'
        };


        return (<div>
            <Header/>
            <div style={{marginLeft:'5%', marginRight:'5%'}}>
                <Row>
                <Col s={4}>
                <Sticky>
                    <Card>
                        <h4 align="center">
                            个人信息
                        </h4>
                        <Row>
                            <Col s={1}></Col>
                            <Col s={10}>
                            <Input label="姓名" validate="validate" style={inputLine}>
                                <Icon>account_circle</Icon>
                            </Input>
                            <Input label="微信号" validate="validate" style={inputLine}>
                                <Icon>chat</Icon>
                            </Input>
                            <Input label="邮箱" validate="validate" style={inputLine}>
                                <Icon>email</Icon>
                            </Input>
                            <Input label="电话号码" validate="validate" type='tel' style={inputLine}>
                                <Icon>phone</Icon>
                            </Input>
                            </Col>
                            <Col s={1}></Col>
                        </Row>
                    </Card>
                </Sticky>
                </Col>
                <Col s={1}></Col>
                    <Col s={7}>
                        <Card>
                            <Row>
                                <h4 align="center">
                                    房屋信息
                                </h4>
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
                                <Input s={6} label="小区" validate="validate" type='select' icon='location_city'>
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
                                <Input s={6} label="房型" validate="validate" type='select' icon='home'>
                                    <option value='1'>3b 2b</option>
                                    <option value='2'>2b 2b</option>
                                    <option value='3'>1b 1b</option>
                                </Input>
                                <Input s={6} label="出租房间" validate="validate" type='select' icon='hotel'>
                                    <option value='1'>主卧</option>
                                    <option value='2'>侧卧</option>
                                    <option value='3'>客厅</option>
                                </Input>
                            </Row>
                            <Row>
                                <Input s={6} type='select' label="价格" icon='attach_money'>
                                    <option value='1'>500以下</option>
                                    <option value='2'>500-700</option>
                                    <option value='3'>700-900</option>
                                    <option value='4'>900-1100</option>
                                    <option value='5'>1100以上</option>
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
                                     <label for="icon_prefix2">注意事项</label>
                                </div>
                            </Row>
                            <div style={{marginLeft: '10px'}}>
                                <Row>
                                    <i class="small material-icons" style={{float: 'left', marginRight: '15px'}}>event_available</i>
                                    <h5>可用设施（室内&周边）</h5>
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
                                </div>
                            </div>
                            <br/>
                        {/**<div style={{marginLeft: '20px'}}>
                                <Row>
                                    <i class="small material-icons" style={{float: 'left', marginRight: '15px'}}>insert_photo</i>
                                    <p style={{fontSize: '20px'}}>添加照片</p>
                                </Row>
                                <Row>
                                <div className="file-field input-field col s6">
                                  <div class="btn grey">
                                  <p style={{fontSize: '15px'}}>
                                    <i className="material-icons left">file_upload</i>
                                    上传图片
                                  </p>

                                    <input type="file"/>
                                  </div>
                                  <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text"/>
                                  </div>
                                </div>
                                </Row>
                            </div>**/}
                            <div style={{marginLeft: '2%'}}>
                              <Row>
                                  <i class="small material-icons" style={{float: 'left', marginRight: '15px'}}>insert_photo</i>
                                  <h5>添加照片</h5>
                              </Row>
                              <ImageUploader />
                            </div>

                          {/**<Row>
                              <div className="file-field input-field col s8">
                                <div className="btn-large grey" style={photoButton}>
                                <p style={{fontSize: '20px'}}>
                                  <i className="material-icons left">file_upload</i>
                                  上传图片
                                </p>
                                  <input type="file"/>
                                </div>
                                <div class="file-path-wrapper">
                                  <input class="file-path validate" type="text"/>
                                </div>
                              </div>
                            </Row>**/}

                        </Card>
                        <Row>
                            <div className="center">
                                <button style={publishButton} className='btn waves-effect waves-light btn-large red' type="submit" name="action" onClick={this.handleClick}>
                                    <h5>发布</h5>
                                </button>
                            </div>
                        </Row>
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
