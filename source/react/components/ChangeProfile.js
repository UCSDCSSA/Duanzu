/**
 * @author: Wenlin Mao & Enqi Zhang
 * @date: 2017/11/12
 */

import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Collection, CollectionItem, Row, Col } from 'react-materialize';

import Header from './Header';

class InfoCard extends React.Component {
    render () {

        // TODO need info from data base
        return (

            <div>
                <CollectionItem href={this.props.infoSite}>
                    <Row>
                        <Col s={4} className='nameTag'> <h5> {this.props.infoName} </h5> </Col>
                        <Col s={7} className='infoTag'>{this.props.infoID}</Col>
                        <i className="material-icons">keyboard_arrow_right</i>
                    </Row>
                </CollectionItem>
            </div>
        );
    }
};

const ChangeProfile = () => {

    var allProfileInfo = [
        {
            id: "1",
            name: "Name",
            infoLink: "sdioafj"
        },
        {
            id: "2",
            name: "Email",
            infoLink: "sdioafj"
        },
        {
            id: "3",
            name: "Phone",
            infoLink: "sdioafj"
        },
        {
            id: "4",
            name: "WeChat",
            infoLink: "sdioafj"
        }
    ]

    var allProfileElement = [];
    for (var i = 0; i < allProfileInfo.length; i++)
    {
        allProfileElement.push((<InfoCard key={allProfileInfo[i].id}
            infoID={allProfileInfo[i].id}
            infoName={allProfileInfo[i].name}
            infoSite={allProfileInfo[i].infoLink}/>));
    }

    return(
        <div>
            <Header />
            <div className="container">
                <h4> Your Personal Info </h4>
                <Collection>
                    {allProfileElement}
                </Collection>
            </div>
        </div>
    );
};

export default ChangeProfile;
