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
        return (<div>
            <Header/>
            <div>
                <Card className='small' src="/img/cv.jpg"></Card>

                <div className="row">
                    <div className="col s5">
                        <h2>Costa Verde</h2>
                        <h4>地址aaaaaaaaaaaaaaaaaaaaaaa</h4>
                        <div className="card card-panel indigo lighten-3">
                            <h4>Detail</h4>
                            <h5>N室N厅 N床</h5>
                            <h5>男女限不限</h5>
                            <h5>交通方式</h5>

                        </div>
                    </div>
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
