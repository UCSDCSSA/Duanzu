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

    $(document).ready(function(){
        $('.carousel').carousel({
            fullWidth: true,
            numVisible:1,
            duration:250,
        });
    });

    autoplay()
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }



    return (
        <div className="home-page">
        <Header/>


        <div className="image-container" style={{width:"100%", height:"600px"}}>
            <div className= "col l12 m12 s12">

                <div className="carousel">
                    <a className="carousel-item"><img src="/img/cover_image1.jpg" style={{height:'600px', width:'100%',filter:'brightness(70%)'}}/></a>
                    <a className="carousel-item"><img src="/img/cover_image2.jpg" style={{height:'600px', width:'100%',filter:'brightness(70%)'}}/></a>
                    <a className="carousel-item"><img src="/img/cover_image3.jpg" style={{height:'600px', width:'100%',filter:'brightness(70%)'}}/></a>
                    <a className="carousel-item"><img src="/img/cover_image4.jpg" style={{height:'600px', width:'100%',filter:'brightness(70%)'}}/></a>

                    <div className = "search-input col l10">
                            <Icon className="medium material-icons grey-text lighten-1"> search </Icon>
                            <div className="user-input" style={{width:'60%',display:'inline-flex', height:'65px'}}>
                                <Input placeholder="请输入小区" id="user_input" type="text"/>
                            </div>
                                <a className="waves-effect waves-light btn red">搜索</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">

            <div className="row">
            <div className= "col l3 s12 m4" >
                    <LeasingCard houseImage = "/img/towers.jpg"
                         houseSex = "只限女生"
                         houseType = "2B2B"
                         houseName = "Towers"
                         rent = "1000$"
                         duration = "8-9月"
                         houseTitle = "SS2 CV主卧招租" />
                </div>

                <div className= "col l3 s12 m4" >
                    <LeasingCard houseImage = "/img/cv.jpg"
                         houseSex = "男女不限"
                         houseType = "3B1B"
                         houseName = "Costa Verde"
                         rent = "1000$"
                         duration = "7-9月"
                         houseTitle = "暑假主卧招租 男女不限" />
                </div>

                <div className= "col l3 s12 m4" >
                    <LeasingCard houseImage = "/img/international_garden.jpg"
                         houseSex = "只限男生"
                         houseType = "2B2B"
                         houseName = "International Garden"
                         rent = "1000$"
                         duration = "6-7月"
                         houseTitle = "ss1副卧招租" />
                </div>

                <div className= "col l3 s12 m4" >
                    <LeasingCard houseImage = "/img/cv.jpg"
                         houseSex = "男女不限"
                         houseType = "2B2B"
                         houseName = "Costa Verde"
                         rent = "1000$"
                         duration = "1月/3月"
                         houseTitle = "CV village 2b/2b 男女不限" />
                </div>

                <div className= "col l3 s12 m4" >
                    <LeasingCard houseImage = "/img/cv.jpg"
                         houseSex = "男女不限"
                         houseType = "2B2B"
                         houseName = "Costa Verde"
                         rent = "1000$"
                         duration = "1月/3月"
                         houseTitle = "CV village 2b/2b 男女不限" />
                </div>

                <div className= "col l3 s12 m4" >
                    <LeasingCard houseImage = "/img/cv.jpg"
                         houseSex = "男女不限"
                         houseType = "2B2B"
                         houseName = "Costa Verde"
                         rent = "1000$"
                         duration = "1月/3月"
                         houseTitle = "CV village 2b/2b 男女不限" />
                </div>

                <div className= "col l3 s12 m4" >
                    <LeasingCard houseImage = "/img/cv.jpg"
                         houseSex = "男女不限"
                         houseType = "2B2B"
                         houseName = "Costa Verde"
                         rent = "1000$"
                         duration = "1月/3月"
                         houseTitle = "CV village 2b/2b 男女不限" />
                </div>

                <div className= "col l3 s12 m4" >
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
