/**
 * @author: Yuhan Wang, Zixin Shen
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';
import Header from './Header';

class ViewLeasing extends React.Component {
  render() {

    var cardStyle = {
      "backgroundImage": "url('/img/cv1.jpg')",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "height": "500px"
    };

    var border = {
      "padding": "0",
      "borderRadius": "10px",
      "border": "2px solid rgba(42,107,147,1)"
    };

    var vlContainer = {
      "margin": "20px",
    }

    return (<div>
      <Header/>
        <Card style={cardStyle}></Card>

        <div className={vlContainer}>
          <Row>
            <Col s={8}>
                <Row>
                    <h3>
                        <span style={border}>男女不限</span>
                    CV Village
                    </h3>
                </Row>

                <div className="container">
                    <Row>
                        <Col s={2}>简介</Col>
                        <Col s={10}>abc</Col>
                    </Row>
                    <Row>
                        <Col s={2}>房屋设施</Col>
                        <Col s={10}>abc</Col>
                    </Row>
                    <Row>
                        <Col s={2}>注意事项</Col>
                        <Col s={10}>abc</Col>
                    </Row>
                </div>
            </Col>

            <Col s={4}>
                <Card>
                    <Row>
                        <Col className="center" s={4}>7月13日</Col>
                        <Col s={2}>起</Col>
                        <Col className="center" s={4}>7月13日</Col>
                        <Col s={2}>止</Col>
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
                </Card>
            </Col>
          </Row>
        </div>


    </div>);
  }
};

export default ViewLeasing;
