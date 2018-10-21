// @flow
/**
 * @author: Liby Lee
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';
import LeasingCard from './LeasingCard.js'

// Import UI Components
import {
    Input,
    Button,
    Card,
    Row,
    Col,
    Icon
} from 'react-materialize';
import Header from './Header';

class Display extends React.Component {

    handleClick() {
        window.location.href = '/#/publish'
    }
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

        return (<div>
            <Header/>
            <Row align="center">
                <div className="col s3">
                    <div>已有房源1</div>
                    <LeasingCard houseImage="/img/cv.jpg" houseSex="男女不限" houseType="2B2B" houseName="Costa Verde" rent="1000$" duration="1月/3月" houseTitle="CV village 2b/2b 男女不限"/>
                </div>
                <div className="col s3">
                    <div>已有房源1</div>
                    <LeasingCard houseImage="/img/cv.jpg" houseSex="男女不限" houseType="2B2B" houseName="Costa Verde" rent="1000$" duration="1月/3月" houseTitle="CV village 2b/2b 男女不限"/>
                </div>
                <div className="col s3">
                    <div>已有房源1</div>
                    <LeasingCard houseImage="/img/cv.jpg" houseSex="男女不限" houseType="2B2B" houseName="Costa Verde" rent="1000$" duration="1月/3月" houseTitle="CV village 2b/2b 男女不限"/>
                </div>
                <div className="col s3">
                    <div>已有房源4</div>
                    <LeasingCard houseImage="/img/cv.jpg" houseSex="男女不限" houseType="2B2B" houseName="Costa Verde" rent="1000$" duration="1月/3月" houseTitle="CV village 2b/2b 男女不限"/>
                </div>
        </Row>
        <Row align="center">
            <Button className="btn" name="action" type="submit" node='a' href='/#/publish'>跳转</Button>
        </Row>

        <div>
		<Button waves='light' node='a' href='/#/publish'> Open Me In New Tab </Button>
</div>
    </div>);
    }

    componentDidMount() {

        $('#startDate').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false, // Close upon selecting a date,
            min: new Date()
        });
        $('#endDate').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false, // Close upon selecting a date,
            min: 1
        });

    }
};

export default Display;
