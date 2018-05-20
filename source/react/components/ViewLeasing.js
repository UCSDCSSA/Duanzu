/**
 * @author: Yuhan Wang, Zixin Shen
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';
import Header from './Header';

import Facility from './Facility';
import GoogleMapTest from './GoogleMapTest'
import scrollToComponent from 'react-scroll-to-component';
import Sticky from 'react-sticky-el';

class ViewLeasing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {like: false};
    }
    handleClick () {
        this.setState((prev) => {
            var next = {
                like: !prev.like
            }
            return next;
        });
    }

    render() {

      var houseTitle = this.props.houseTitle;
      function buttonDisplay(like) {
          if(!like) {
              return(
                  <div>
                        <i className="material-icons">favorite_border</i><br/>
                  </div>
              );
          } else {
              return(
                  <div>
                        <i className="material-icons">favorite</i><br/>
                  </div>
              );
          }
      }

    var cardStyle = {
      "backgroundImage": "url('/img/cv1.jpg')",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "height": "400px"
    };

    var border = {
      "padding": "0",
      "borderRadius": "10px",
      "border": "2px solid rgba(42,107,147,1)"
    };

    var vlContainer = {
      "margin": "20px"
    }

    var buttonStyle = {
      "color": "#00838f",
      "textDecorationLine": "underline",
      "cursor": "pointer"
    }

    var label = {
        "backgroundColor": "#00838f",
        "fontSize": "25px",
        "color": "white",
        "paddingLeft": "14px",
        "paddingRight": "14px",
        "paddingBottom": "9px",
        "paddingTop": "9px",
    }

    var allIconName = [
        {
            id: "wifi",
            name: "Wifi"
        }, {
            id: "local_dining",
            name: "local_dining"
        }, {
            id: "local_mall",
            name: "local_mall"
        }, {
            id: "local_car_wash",
            name: "local_car_wash"
        }, {
            id: "rss_feed",
            name: "rss_feed"
        }
    ]

    var allAvailIconElement = [];
    for (var i = 0; i < allIconName.length; i++) {
        allAvailIconElement.push((<Facility icon_id={allIconName[i].id} text={allIconName[i].id} avail/>));
    }

    var allUnavailIconElement = [];
    for (var i = 0; i < allIconName.length; i++) {
        allUnavailIconElement.push((<Facility icon_id={allIconName[i].id} text={allIconName[i].id}/>));
    }


    return (<div>
      <Header/>
        <Card style={cardStyle}></Card>

        <div className={vlContainer}>
          <Row>
            <Col s={8}>

                <div className="container">
                <Row>
                    <Col s={2}>
                        <h6 style={label} className = "center">男/女</h6>
                    </Col>
                    <Col s={10}>
                        <h4>houseTitle</h4>
                    </Col>
                </Row>

                    <Row>
                    <Col s={2}></Col>
                    <Col s={3}>
                        <a style={buttonStyle} onClick={() => scrollToComponent(this.houseInfo, { offset: 0, align: 'top', duration: 300})}>
                            <h5>房屋信息</h5>
                        </a>
                    </Col>
                    <Col s={3}>
                        <a style={buttonStyle} onClick={() => scrollToComponent(this.surrounding, { offset: 0, align: 'top', duration: 300})}>
                            <h5>小区信息</h5>
                        </a>
                    </Col>
                    <Col s={4}>
                        <a style={buttonStyle} onClick={() => scrollToComponent(this.arrival, { offset: 0, align: 'top', duration: 300})}>
                            <h5>如何到达</h5>
                        </a>
                    </Col>
                    </Row>
                    <Row>
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
                        <Col s={2} className="cyan-text text-darken-3 right-align">
                            <section className="houseInfo" ref={(section) => { this.houseInfo = section;}}>房屋设施</section>
                        </Col>
                        <Col s={5}>可用
                            {allAvailIconElement}
                        </Col>
                        <Col s={5} className="grey-text text-lighten-1">不可用
                            {allUnavailIconElement}
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
                        <Col s={2} className="cyan-text text-darken-3 right-align">
                            <section className="surrounding" ref={(section) => { this.surrounding = section;}}>附近设施</section>
                        </Col>
                        <Col s={5}>
                            {allAvailIconElement}
                        </Col>
                        <Col s={5}>
                            {allAvailIconElement}
                        </Col>
                    </Row>
                    <Row>
                        <div style={{height: "185px"}}>
                        <GoogleMapTest style={cardStyle}></GoogleMapTest>
                        </div>
                    </Row>
                    <Row>
                        <Col s={2} className="cyan-text text-darken-3 right-align">
                            <section className="arrival" ref={(section) => { this.arrival = section;}}>如何到达</section>
                        </Col>
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
            <Sticky>
                <Card>
                    <Row>
                        <Col className="center" s={5}><h5>7月13日</h5></Col>
                        <Col s={1} className="left-align" style={{fontSize:'10px', paddingTop: '20px'}}>起</Col>
                        <Col className="center" s={5}><h5>7月13日</h5></Col>
                        <Col s={1} className="left-align" style={{fontSize:'10px', paddingTop: '20px'}}>止</Col>
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
                    <hr/>
                    <Row>
                        <h5>联系方式</h5>
                    </Row>

                    <Row>
                        <Col s={5}>
                            <Row>张三</Row>
                            <a className="waves-effect waves-light btn-large red" style={{marginBottom: '-240px', marginLeft: '-15px', paddingBottom: '100px'}}
                                onClick={ () => {
                                    this.setState((prev) => {
                                        var next = {
                                            like: !prev.like
                                        }
                                        return next;
                                    });
                                } }>
                                { buttonDisplay(this.state.like) }
                                收藏房源
                            </a>
                        </Col>
                        <Col s={7}>
                            <Row>
                                8581234567
                            </Row>
                            <Row>
                                微信名称
                            </Row>
                            <Row>
                                abcd@ucsd.edu
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Sticky>
            </Col>
          </Row>
        </div>


    </div>);
  }
};

export default ViewLeasing;
