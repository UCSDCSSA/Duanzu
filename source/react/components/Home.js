/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Input, Icon, Button, Carousel} from 'react-materialize';
import Header from './Header';
import LeasingCard from './LeasingCard';


const Home = () => {
    //render() {
    var cardStyle = {
      "backgroundImage": "url('/img/cover_image.jpg')",
      "backgroundPosition": "center",
      "height": "600px"
    };

    $(document).ready(function(){
        $('.carousel carousel-slider').carousel({
            fullWidth: true
        });
    });


    return (
        <div className= "home-page">
            <Header/>
            <div className="carousel carousel-slider">
                <a className="carousel-item" href="#one!"><img src="/img/cover_image.jpg"/></a>
                <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
            </div>

            <Card style={cardStyle}>
                <div className="row" style={{position:'relative'}}>
                    <div className = "search-input center-aligned col l10">
                        <Icon className="medium material-icons grey-text lighten-1"> search </Icon>
                        <div className="user-input" style={{marginTop:'-0.5rem', width:'85%'}}>
                            <Input placeholder="请输入小区" id="user_input" type="text"/>
                            <a className="waves-effect waves-light btn red">搜索</a>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="container">
                <div className="row">
                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>

                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>

                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>

                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>

                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>

                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>

                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>

                    <div style={{marginTop:'20px'}} className= "col l3 s12 m4" >
                        <LeasingCard houseImage = "/img/cv.jpg"
                             houseSex = "男女不限"
                             houseType = "2B2B"
                             houseName = "Costa Verde"
                             rent = "1000$"
                             duration = "1月/3月"
                             houseTitle = "CV village 2b/2b 男女不限" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
