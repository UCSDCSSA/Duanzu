/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-materialize';
import Header from './Header';

class LeasingCard extends React.Component {
    render() {
        
        var cardStyle = {
            "backgroundImage": "url('/img/cv.jpg')",
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "height": "500px"
        };
        
        var infoStyle = {
            "padding": "0 15px"
        };
        
        var rowStyle = {
            "paddingBottom": "10px"
        };
        
        return (<div className="col s3">
            <div className="card">
                <div className="card-image" style={cardStyle}></div>
                <div style={infoStyle}>
                    <h5>{this.props.leasingName}</h5>
                    <Row style={rowStyle}>
                        <Col s={4}>
                            $1000
                        </Col>
                        <Col className="center" s={4}>
                            1月/3月
                        </Col>
                        <Col className="right-align" s={4}>
                            2B2B
                        </Col>
                    </Row>
                </div>
            </div>
        </div>);
    }
    
    componentDidMount() {
        $(".card-image").each(function () {
            var width = $(this).width();
            $(this).height(width);
        });
    }
};

const Home = () => {

    var allLeasingData = [
        {
            id: "jaofijoqwirjf0aij0",
            name: "Costa Verde"
        }, {
            id: "adsfajoifjoaiwrj",
            name: "La Regencia"
        }, {
            id: "asdfkjalsdfkj",
            name: "International Garden"
        }, {
            id: "adflajsdflaj",
            name: "Solazzo"
        }, {
            id: "ajdias0dfa0a",
            name: "UCSD"
        }
    ]

    var allLeasingElement = [];
    for (var i = 0; i < allLeasingData.length; i++) {
        allLeasingElement.push((<LeasingCard key={allLeasingData[i].id} leasingId={allLeasingData[i].id} leasingName={allLeasingData[i].name}/>));
    }

    return (<div>
        <Header/>
        <div className="container">
            <div className="row">
                {allLeasingElement}
            </div>
        </div>
    </div>);
};

export default Home;
