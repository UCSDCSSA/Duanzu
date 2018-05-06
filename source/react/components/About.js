/**
 * @author: Yiyang Yin
 * @date: 2017/11/12
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-materialize'
import Header from './Header';

import Axios from 'axios';

class DeveloperCard extends React.Component {
    
    componentDidMount() {
        Axios.get("localhost:21023/ajax/")
    }
    
    render() {

        var cardStyle = {
            "height": "150px",
            "width": "150px",
            "marginTop": "20px"
        };

        var imageStyle = {
            "backgroundImage": "url('/img/developer.jpg')",
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "height": "150px"
        }

        var infoStyle = {
            "padding": "0 10px"
        };

        var rowStyle = {
            "paddingBottom": "10px"
        };

        return (<div className="col s3">
            <div className="card" style={cardStyle}>
                <div className="card-image" style={imageStyle}></div>
                <div style={infoStyle}>
                    <h5>{this.props.developerName}</h5>
                    <Row style={rowStyle}>
                        <Col s={6}>
                            组长
                        </Col>
                        <Col className="center" s={6}>
                            李子阳
                        </Col>
                    </Row>
                </div>
            </div>
        </div>);
    }

    componentDidMount() {
        $(".card-image").each(function() {
            var width = $(this).width();
            $(this).height(width);
        })
    }
}

class About extends React.Component {
    render() {

        var allLeaderData = [
            {
                id: "a10000000",
                name: "Liby Lee",
                category: "组长"
            }, {
                id: "a20000000",
                name: "Archer",
                category: "组长"
            }
        ]

        var allDeveloperData = [
            {
                id: "a00000002",
                name: "Hougong 1"
            }, {
                id: "a00000003",
                name: "Hougong 2"
            }, {
                id: "a00000004",
                name: "Hougong 3"
            }, {
                id: "a00000005",
                name: "Hougong 4"
            }, {
                id: "a00000006",
                name: "Hougong 5"
            }, {
                id: "a00000007",
                name: "Hougong 6"
            }, {
                id: "a00000008",
                name: "Hougong 7"
            }
        ]

        //load all leader's data to array
        var allLeaderElement = [];
        for (var i = 0; i < allLeaderData.length; i++) {
            allLeaderElement.push(<DeveloperCard developerId={allLeaderData[i].id} developerName={allLeaderData[i].name}/>)
        }

        //load all developer's data to array
        var allDeveloperElement = [];
        for (var i = 0; i < allDeveloperData.length; i++) {
            allDeveloperElement.push(<DeveloperCard developerId={allDeveloperData[i].id} developerName={allDeveloperData[i].name}/>)
        }

        return (<div>
            <Header/>
            <div className="container">
                <h2>UCSD CSSA Tec Development Team</h2>
                <h5>CSSA技术部隶属于加州大学圣地亚哥分校中国学生学者联合会，下属设立开发组和摄制组。</h5>
                <h5>UCSD短租平台是由UCSD CSSA技术部开发组开发与维护的网上租房信息发布平台。</h5>
                <br></br>
                <h5>开发组组长</h5>
                <div className="row">
                    {allLeaderElement}
                </div>
                <br></br>
                <h5>部门成员</h5>
                <div className="row">
                    {allDeveloperElement}
                </div>
            </div>
        </div>);
    }
};

export default About;
