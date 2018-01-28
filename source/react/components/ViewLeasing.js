/**
 * @author: Yuhan Wang, Zixin Shen
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';
import Header from './Header';

class ViewLeasing extends React.Component {
  render() {

    var cardStyle = {
      "backgroundImage": "url('/img/cv1.jpg')",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "height": "300px"
    };

    var border = {
      "padding": "0",
      "borderRadius": "10px",
      "border": "2px solid rgba(42,107,147,1)"
    };

    var vlContainer = {
      "margin": "20px"
    }

    var label = {
        "backgroundColor": "#00838f",
        "fontSize": "30px",
        "color": "white",
        "paddingLeft": "14px",
        "paddingRight": "14px",
        "paddingBottom": "9px",
        "paddingTop": "9px"
    }

    return (<div>
      <Header/>
        <Card style={cardStyle}></Card>

        <div className={vlContainer}>
          <Row>
            <Col s={8}>
                <Row>
                    <Col>
                        <span style={label}>男女不限</span>
                    </Col>
                    <Col><h4>CV Village</h4></Col>
                </Row>

                <div className="container">
                    <Row>
                    <Col s={2}></Col>
                    <Col s={3}><a href="#house"><h5>房屋信息</h5></a></Col>
                    <Col s={3}><h5>小区信息</h5></Col>
                    <Col s={4}><h5>位置</h5></Col>
                        <Col s={2} className="cyan-text text-darken-3 right-align">简介</Col>
                        <Col s={10}>
                        Leasing a car could be more clearly described
                         as long-term car rental. You pay a monthly price that
                        allows you to “borrow" a brand new car for an extended
                        period of time—typically around 36 months, though this
                        number will vary based on your dealership. At the end of
                        your lease, you will have the choice to either buy your
                        car, for an amount specified in your lease agreement, or
                        turn the vehicle in.
                        </Col>
                    </Row>
                    <Row>
                        <Col s={2} className="cyan-text text-darken-3 right-align">房屋设施</Col>
                        <Col s={5}>可用
                            <br />
                            <i className="material-icons">wifi</i>  Wifi
                            <br />
                            <i className="material-icons">wifi</i>  Wifi
                            <br />
                            <i className="material-icons">wifi</i>  Wifi
                        </Col>
                        <Col s={5} className="grey-text text-lighten-1">不可用
                            <br />
                            <i className="material-icons">wifi</i>  Wifi
                            <br />
                            <i className="material-icons">wifi</i>  Wifi
                            <br />
                            <i className="material-icons">wifi</i>  Wifi
                        </Col>
                    </Row>
                    <Row>
                        <Col s={2} className="cyan-text text-darken-3 right-align">注意事项</Col>
                        <Col s={10}>
                        Leasing a car could be more clearly described
                         as long-term car rental. You pay a monthly price that
                        allows you to “borrow" a brand new car for an extended
                        period of time—typically around 36 months, though this
                        number will vary based on your dealership. At the end of
                        your lease, you will have the choice to either buy your
                        car, for an amount specified in your lease agreement, or
                        turn the vehicle in.
                        </Col>
                    </Row>
                    <Row>
                        <Card style={cardStyle}></Card>
                    </Row>
                    <Row>
                        <Col s={2} className="cyan-text text-darken-3 right-align">附近设施</Col>
                        <Col s={5}>
                            <i className="material-icons">local_dining</i>  Dining
                            <br />
                            <i className="material-icons">local_car_wash</i>  Car Wash
                            <br />
                            <i className="material-icons">local_mall</i>  Mall
                        </Col>
                        <Col s={5}>
                            <i className="material-icons">local_dining</i>  Dining
                            <br />
                            <i className="material-icons">local_car_wash</i>  Car Wash
                            <br />
                            <i className="material-icons">local_mall</i>  Mall
                        </Col>
                    </Row>
                    <Row>
                        <Card style={cardStyle}></Card>
                    </Row>
                    <Row>
                        <Col s={2} className="cyan-text text-darken-3 right-align">如何到达</Col>
                        <Col s={10}>
                            Leasing a car could be more clearly described
                             as long-term car rental. You pay a monthly price that
                            allows you to “borrow" a brand new car for an extended
                            period of time—typically around 36 months, though this
                            number will vary based on your dealership. At the end of
                            your lease, you will have the choice to either buy your
                            car, for an amount specified in your lease agreement, or
                            turn the vehicle in.
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col s={4}>
                <Card>
                    <Row>
                        <Col className="center" s={4}>7月13日</Col>
                        <Col s={2}>起</Col>
                        <Col className="center" s={4}>7月13日</Col>
                        <Col s={2}>止</Col>
                    </Row>

                    <Row>
                        <Col className="center" s={4}>卧室</Col>
                        <Col className="center" s={4}>客厅</Col>
                        <Col className="center" s={4}>厕所</Col>
                    </Row>

                    <Row>
                        <Col className="center" s={4}>$1000</Col>
                        <Col className="center" s={4}>$1000</Col>
                        <Col className="center" s={4}>$1000</Col>
                    </Row>
                </Card>
            </Col>
          </Row>
        </div>


    </div>);
  }
};

export default ViewLeasing;
