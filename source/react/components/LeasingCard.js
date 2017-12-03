/**
* @author: Wenlin Mao
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

class LeasingCard extends React.Component {
    render () {
        return {
            <div>
                <Col s={3}>
                    <Card className="houseImage"
                        header={<CardTitle image={this.props.houseImage}/>}>
                        <Row style={rowStyle}>
                            <center>
                                <h5> {this.props.name} </h5>
                            </center>
                        </Row>
                    </Card>
                </Col>
            </div>
        }
    }

    getName () {
        return this.props.name;
    }
}






// class LeasingCard extends React.Component {
//
//    var rowStyle = {
//        "paddingBottom": "10px"
//    };
//
//    // TODO need info from data base
//    return (
//                <Card className="houseImage"
//                    header={<CardTitle image={this.props.houseImage}/>}>
//                    <Row style={rowStyle}>
//                        <center>
//                            <h5> {this.props.houseName} </h5>
//                        </center>
//                    </Row>
//                </Card>
//    );
// }
//
// componentDidMount() {
//    $(".houseImage").each(function () {
//        var width = $(this).width();
//        $(this).height(width);
//    })
// }
// }
