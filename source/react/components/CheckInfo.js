/**
 * @author: Yuhan Wang, Zixin Shen
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col} from 'react-materialize';
import Header from './Header';

class CheckInfo extends React.Component {
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

    return (<div>
      <Header/>
      <div>
        <Card style={cardStyle}></Card>

        <Row>
          <Col s={2}>
            <h4 style={border}>男女不限</h4>
          </Col>
          <Col s={5}>
            <h2>Costa Verde</h2>
          </Col>
          <Col s={5}></Col>
          {/*<h4>地址aaaaaaaaaaaaaaaaaaaaaaa</h4>
                        <div className="card card-panel indigo lighten-3">
                            <h4>Detail</h4>
                            <h5>N室N厅 N床</h5>
                            <h5>男女限不限</h5>
                            <h5>交通方式</h5>

                        </div>*/
          }
        </Row>

        <div className="container">
          <Row>
            <Col s={7}>
              <ul id="tabs-swipe-demo" className="tabs">
                <li className="tab col s3">
                  <a href="#test-swipe-1">
                    <h4>房屋信息</h4>
                  </a>
                </li>
                <li className="tab col s3">
                  <a className="active" href="#test-swipe-2">
                    <h4>小区信息</h4>
                  </a>
                </li>
                <li className="tab col s3">
                  <a href="#test-swipe-3">
                    <h4>位置</h4>
                  </a>
                </li>
              </ul>
            </Col>
            <Col s={5}></Col>
          </Row>
          <Row>
            <Col s={7}>

              <div id="test-swipe-1">
                <Row>
                  <div className="col s2">
                    简介
                  </div>
                  <div className="col s10">
                    aaaaaaaaaaaaaaaaaaaaaaaaa
                  </div>
                </Row>
                <Row>
                  <div className="col s2">
                    房内设施
                  </div>
                  <div className="col s10">
                    aaaaaaaaaaaaaaaaaaaaaaaaa
                  </div>
                </Row>
                <Row>
                  <div className="col s2">
                    注意事项
                  </div>
                  <div className="col s10">
                    aaaaaaaaaaaaaaaaaaaaaaaaa
                  </div>
                </Row>
              </div>

              <div id="test-swipe-2">
                <Row>
                  <div className="col s2">
                    小区设施
                  </div>
                  <div className="col s10">
                    aaaaaaaaaaaaaaaaaaaaaaaaa
                  </div>
                </Row>
                <Row>
                  <div className="col s2">
                    附近设施
                  </div>
                  <div className="col s10">
                    aaaaaaaaaaaaaaaaaaaaaaaaa
                  </div>
                </Row>
              </div>
              <div id="test-swipe-3" className="col s12 green">
                Test 3
              </div>
            </Col>
            <Col s={5}></Col>
          </Row>

          <div className="col s2">
            <h4>评分：</h4>
          </div>
          <div className="col s5 card"></div>

        </div>

        <div className="row">
          <div className="col s6 card-panel purple lighten-3">
            <h4>姓名</h4>
            <h5>电话</h5>
            <h5>微信号</h5>
            <h5>邮箱</h5>
          </div>
          <div className="col s6 card-panel teal lighten-3">
            <h4>要求</h4>
            <h5>不许。。。。</h5>
          </div>
        </div>
      </div>
    </div>);
  }
};

export default CheckInfo;
