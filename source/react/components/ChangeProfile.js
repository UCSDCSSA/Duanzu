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
    Icon
} from 'react-materialize';

import Header from './Header';

class InfoCard extends React.Component {
    render() {

        // TODO need info from data base
        return (<div>
            <CollectionItem>
                <Row>
                    <Col s={4}>
                        <center>
                            <h5>
                                <Icon small="small" left="left">{this.props.icon}</Icon>
                                {this.props.infoName}
                            </h5>
                        </center>
                    </Col>
                    <Input s={7} label={this.props.infoID}/>
                </Row>
            </CollectionItem>
        </div>);
    }
};
//<i className="material-icons">keyboard_arrow_right</i>
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

    var allProfileElement = [];
    //infoSite={allProfileInfo[i].infoLink}
    for (var i = 0; i < allProfileInfo.length; i++) {
        allProfileElement.push((<InfoCard key={allProfileInfo[i].id} infoID={allProfileInfo[i].id} infoName={allProfileInfo[i].name} icon={allProfileInfo[i].icon}/>));
    }

    return (<div>
        <Header/>
        <Row>
            <Col offset="l1" s={10}>
                <div className="container">
                    <Collection header="Your Personal Info">
                        {allProfileElement}
                    </Collection>
                </div>
            </Col>
        </Row>
    </div>);
};

export default ChangeProfile;
