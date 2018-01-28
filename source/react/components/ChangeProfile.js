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
                    <Row >
                        <Col s={4}>
                            <center>
                                <h5>
                                    <Icon small left>{this.props.icon}</Icon>
                                    {this.props.infoName}
                                </h5>
                            </center>
                        </Col>
                        <Col s={7}>
                            <h5>
                                {this.props.infoID}
                            </h5>
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
    ]

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
    ]

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
        //"backgroundImage": "url('/img/cv.jpg')",
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
        "width": "330px",
        "height": "330px",
        "box-shadow": "0 2px 10px 4px rgba(0, 0, 0, 0.5)"
    };


    var flexRight = {
        "margin": "20px 0px",
        "width": "100%"
    };

    return (
        <div>
            <Header/>
            <div style={backgroundStyle}>
                <div className="container">
                    <h3> 欢迎回来, </h3>
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
                    </Row>
                </div>
            </div>
            <div style={sectionStyle}>
                <div className="container">
                    <Tabs>
                        <Tab title="我的房源">
                            <div>
                                <Row> {allHouseElement} </Row>
                            </div>
                        </Tab>
                        <Tab title="我的收藏">
                            <div>
                                <Row> {allHouseElement} </Row>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ChangeProfile;
