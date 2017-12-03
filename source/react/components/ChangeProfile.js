/**
 * @author: Wenlin Mao & Enqi Zhang
 * @date: 2017/11/12
 */

import React from 'react';
import {Link} from 'react-router-dom';

import {
    Card,
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
                <CollectionItem>
                    <Row >
                        <Col s={4}>
                            <center>
                                <h5>
                                    <Icon small left>{this.props.icon}</Icon>
                                    {this.props.infoName}
                                </h5>
                            </center>
                        </Col>
                        <Input s={7} label={this.props.infoID}/>
                    </Row>
                </CollectionItem>
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
            id: "1",
            name: "Name",
            icon: "person"
        }, {
            id: "2",
            name: "Email",
            icon: "email"
        }, {
            id: "3",
            name: "Phone",
            icon: "phone"
        }, {
            id: "4",
            name: "WeChat",
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
        "backgroundImage": "url('/img/cv.jpg')",
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
        "margin": "0 auto",
        "width": "200px",
        "height": "200px"
    };

    var flexRight = {
        "width": "66.6667%"
    };

    return (
        <div>
            <Header/>
            <div style={backgroundStyle}>
                <div className="container">
                    <Card>
                        <div style={flex}>
                            <div style={flexLeft} className="valign-wrapper">
                                <img src="/img/cv.jpg" className="circle" style={avatar}/>
                            </div>
                            <div style={flexRight}>
                                <Collection header="Your Personal Info">
                                    {allProfileElement}
                                </Collection>
                            </div>
                        </div>
                    </Card>
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
