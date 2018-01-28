/**
 * @author: Wenlin Mao & Enqi Zhang
 * @date: 2017/11/12
 */

import React from 'react';
import {Link} from 'react-router-dom';

import {
    Card,
    CardPanel,
    Collection,
    CollectionItem,
    Row,
    Col,
    Input,
    Icon,
    CardTitle,
    Tabs,
    Tab
} from 'react-materialize';

import Header from './Header';

class InfoCard extends React.Component {
    render() {

        // TODO need info from data base
        return (
            <div>
                <div>
                    <Row>
                        <Col s={4}>
                            <center>
                                <h7>
                                    <Icon small left>{this.props.icon}</Icon>
                                    {this.props.infoName}
                                </h7>
                            </center>
                        </Col>
                        <Col s={7}>
                            <h6>{this.props.infoID}</h6>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

class HouseCard extends React.Component {
    render() {

        /*var houseCardStyle = {
            "backgroundImage": this.props.houseImage,
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "height": "500px",
            "padding": "10px"
        }*/

        var rowStyle = {
            "paddingBottom": "10px"
        };

        // TODO need info from data base
        return (
            <div>
                <Col s={3}>
                    <Card className="houseImage"
                        header={<CardTitle image={this.props.houseImage}/>}>
                        <Row style={rowStyle}>
                            <center>
                                <h5> {this.props.houseName} </h5>
                            </center>
                        </Row>
                    </Card>
                </Col>
            </div>
        );
    }

    componentDidMount() {
        $(".houseImage").each(function () {
            var width = $(this).width();
            $(this).height(width);
        })
    };
};

const ChangeProfile = () => {

    var username = "CSSA";

    var allProfileInfo = [
        {
            id: "2",
            name: "邮箱",
            icon: "email"
        }, {
            id: "3",
            name: "电话",
            icon: "phone"
        }, {
            id: "4",
            name: "微信",
            icon: "chat"
        }
    ];

    var allHouseInfo = [
        {
            id: "1",
            house: "CV",
            img: '/img/cv.jpg'
        }, {
            id: "2",
            house: "Towers",
            img: '/img/cv.jpg'
        }, {
            id: "3",
            house: "La Regencia",
            img: '/img/cv.jpg'
        }, {
            id: "4",
            house: "ajdf",
            img: '/img/cv.jpg'
        },
        {
            id: "5",
            house: "need database",
            img: '/img/cv.jpg'
        }
    ];

    // array contains all component of profile information
    var allProfileElement = [];
    //infoSite={allProfileInfo[i].infoLink}
    for (var i = 0; i < allProfileInfo.length; i++) {
        allProfileElement.push((
            <InfoCard
                key={allProfileInfo[i].id}
                infoID={allProfileInfo[i].id}
                infoName={allProfileInfo[i].name}
                icon={allProfileInfo[i].icon}/>
        ));
    }

    // array contains all component of house information
    var allHouseElement = [];

    for (var i = 0; i < allHouseInfo.length; i++) {
        allHouseElement.push((
            <HouseCard
                key={allHouseInfo[i].id}
                houseImage={allHouseInfo[i].img}
                houseName={allHouseInfo[i].house}/>
        ));
    }

/*    var allMarkElement = [];
    for (var i = 0; i < allHouseInfo.length; i++) {
        allMarkElement.push((
            <MarkCard
                key={allHouseInfo[i].id}
                houseImage={allHouseInfo[i].img}
                houseName={allHouseInfo[i].house}/>
        ));
    }*/

    var backgroundStyle = {
        "backgroundColor": "rgba(42, 107, 147, 0.07)",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "padding": "70px 0"
    }

    var sectionStyle = {
        "padding": "70px 0"
    }
    var flex = {
        "display": "flex"
    };
    var flexLeft = {
        "width": "33.3333%"
    };

    var avatar = {
        "position": "absolute",
        "margin": "-40px -70px",
        "width": "250px",
        "height": "250px",
        "box-shadow": "0 2px 10px 4px rgba(0, 0, 0, 0.5)"
    };


    var flexRight = {
        "margin": "20px 0px -20px 0px",
        "width": "100%",
        "lineHeight": "28px"
    };

    return (
        <div>
            <Header/>
            <div style={backgroundStyle}>
                <div className="container">
                    <h5 style={{"margin-bottom": 60}}> 欢迎回来,<span style={{"fontSize": "40px"}}> {username}</span></h5>
                    <Row>
                        <Col s={12} m={8}>
                            <Card>
                                <Row>
                                    <Col s={12} m={5}>
                                        <img src="/img/cv.jpg" style={avatar}/>
                                    </Col>
                                    <Col s={12} m={7}>
                                        <div style={flexRight}>
                                            {allProfileElement}
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col s={12} m={1}></Col>
                        <Col s={12} m={3}>
                            <div style={{
                                "margin": "56px 50px 0px 0px",
                                "border-left": "6px solid #2a6b93",
                                "padding": "0px 0px 0px 40px"
                            }}>
                                <h6 style={{"color": "#2a6b93"}}>
                                    修改个人信息
                                </h6>
                                <h6 style={{"margin-top": 36, "color": "#2a6b93"}}>
                                    修改密码
                                </h6>
                                <h6 style={{"margin-top": 36, "color": "#2a6b93"}}>
                                    注销账号
                                </h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div style={sectionStyle}>
                <div className="container">
                    <Tabs>
                        <Tab title="我的房源">
                            <div>
                                <Col s={12}>
                                    <Row> {allHouseElement} </Row>
                                </Col>
                            </div>
                        </Tab>
                        <Tab title="我的收藏">
                            <div>
                                <Col s={12}>
                                    <Row> {allHouseElement} </Row>
                                </Col>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ChangeProfile;
