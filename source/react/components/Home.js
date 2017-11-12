/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

class LeasingCard extends React.Component {
    render () {
        return (
            <div className="col s4">
                <div className="card">
                    <img src="/img/cv.jpg" width="100%" />
                    <center>
                        <h5>{this.props.leasingName}</h5>
                    </center>
                </div>
            </div>
        );
    }
};

const Home = () => {

    var allLeasingData = [
        {
            id: "_aoidsjfa9iq90irj 0iajsf",
            name: "Costa Verde"
        },
        {
            id: "_asjodfiaosifjao iajdsf",
            name: "La Regencia"
        },
        {
            id: "_asjodfiaosifjao iajdsf",
            name: "International Garden"
        }
    ]

    var allLeasingElement = [];
    for (var i = 0; i < allLeasingData.length; i++) {
        allLeasingElement.push((<LeasingCard leasingId={allLeasingData[i].id} leasingName={allLeasingData[i].name}/>));
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {allLeasingElement}
                </div>
            </div>
        </div>
    );
};

export default Home;
