/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Input, Icon, Button, Carousel} from 'react-materialize';
import Header from './Header';
import LeasingCard from '~/components/LeasingCard';
import './styles/home.scss';

class RowItem extends React.Component{


  render(){
    return (
      <div className = "row" style={{marginTop:'20px'}}>
        <div className= "col l3 s12 m4" >
              <LeasingCard houseImage = "/img/towers.jpg"
                   houseSex = "只限女生"
                   houseType = "2B2B"
                   houseName = "Towers"
                   rent = "1000"
                   startDate="1"
                   endDate="3"
                   houseTitle = "SS2 CV主卧招租" />
          </div>

          <div className= "col l3 s12 m4" >
              <LeasingCard houseImage = "/img/cv.jpg"
                   houseSex = "男女不限"
                   houseType = "3B1B"
                   houseName = "Costa Verde"
                   rent = "1000"
                   startDate="1"
                   endDate="3"
                   houseTitle = "暑假主卧招租 男女不限" />
          </div>

          <div className= "col l3 s12 m4" >
              <LeasingCard houseImage = "/img/international_garden.jpg"
                   houseSex = "只限男生"
                   houseType = "2B2B"
                   houseName = "International Garden"
                   rent = "1000"
                   startDate="1"
                   endDate="3"
                   houseTitle = "ss1副卧招租" />
          </div>

          <div className= "col l3 s12 m4" >
              <LeasingCard houseImage = "/img/cv.jpg"
                   houseSex = "男女不限"
                   houseType = "2B2B"
                   houseName = "Costa Verde"
                   rent = "1000"
                   startDate="1"
                   endDate="3"
                   houseTitle = "CV village 2b/2b 男女不限" />
          </div>
      </div>
    );
  }
}

class Home extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            interval: undefined
        };
    }

    render(){
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
                <RowItem />
                <RowItem />
            </div>
        </div>
        );
    }

    componentDidMount() {
        $('.carousel').carousel({
            fullWidth: true,
            numVisible: 1,
            duration: 250,
        });

        if (this.state != null && !this.state.interval) {

            var i = setInterval(function () {
                $('.carousel').carousel('next');
            }, 4500);

            this.setState({
                interval: i
            });
        }
    }
};

export default Home;
