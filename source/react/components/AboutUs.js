/**
 * @author: Yiyang Yin
 * @date: 2017/11/12
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

class DeveloperCard extends React.Component {
    render() {
        return (
            <div className="col s4">
                <div className="card">
                    <img src="/img/developer.jpg" width="100%" />
                    <center>
                        <h5>{this.props.developerName}</h5>
                    </center>
                </div>
            </div>
        )
    }
}

class AboutUs extends React.Component {
    render() {

        var allDeveloperData = [
            {
                id: "a00000001",
                name: "Liby Lee"
            },
            {
                id: "a00000002",
                name: "Hougong 1"
            },
            {
                id: "a00000003",
                name: "Hougong 2"
            }
        ]

        //load all developer's data to array
        var allDeveloperElement = [];
        for (var i = 0; i < allDeveloperData.length; i++) {
            allDeveloperElement.push(
                <DeveloperCard developerId={allDeveloperData[i].id} allDeveloperData[i].name}/>
            )
        }


        return (
            <div>
                <Header />
                <div className="container">
                    <h2>UCSD CSSA Tec Development Team</h2>
                    <h5>UCSD短租平台是由UCSD CSSA技术部开发与维护的网上租房信息发布平台。</h5>
                    <h5>部门成员</h5>
                    <div className="row">
                        {allDeveloperElement}
                    </div>
                </div>
            </div>
        );
    }
};

export default AboutUs;
