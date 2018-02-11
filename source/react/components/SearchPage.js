/**
 * @author: Tianyang Lu Xuran Liu
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col, Icon} from 'react-materialize';
import Header from './Header';
import LeasingCard from './LeasingCard';
import GoogleMapTest from './GoogleMapTest';
//map
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }


    render () {
        return (
            <span style={
                this.state.active ? {
                    "backgroundColor": "#2a6b93",
                    "border": "1px solid",
                    "borderColor": "#2a6b93",
                    "color" : "white"
                } : {}
            } onClick={(e) => this.click(e)}>
                <span>
                  <Icon tiny>{this.props.icon}</Icon>
                  <span style={{margin:'3px'}}> {this.props.text} </span>
                </span>
            </span>
        );
    }

    click () {
        this.setState({
            active: !this.state.active
        });
    }
}

class Tags extends React.Component {
    render () {
        var tags = [
            {
                "icon": "pets",
                "text": "宠物"
            },
            {
                "icon": "local_parking",
                "text": "车位"
            },
            {
                "icon": "local_laundry_service",
                "text": "洗衣机"
            },
            {
                "icon": "pool",
                "text": "游泳池"
            }

        ];
        var tagElements = [];
        for (var i = 0; i < tags.length; i++) {
            tagElements.push(<Tag key={i} icon={tags[i].icon} text={tags[i].text} />)
        }
        return (
            <div style = {{marginLeft: '10px', float:'left'}}>
                {tagElements}
            </div>
        );
    }
}

class SearchPage extends React.Component {
  handleClick (){
      window.location.href = '/#/display'
  }
  render(){
    return(
      <div className="search-page">
      <Header/>


    <div className="row">
      <div className="col l7 s12">

          <div className="search-bar" >
            <div className="search-bar-top">
            <div style={{width:'20%', float:'left'}}>
              <input placeholder="搜索房源" id="apartmentName" type="text" className="validate" />
            </div>
            <div style={{width:'20%', float:'left'}}>
              <input placeholder="Placeholder" id="first_name" type="text" className="validate" style = {{height:'1.5rem'}}/>
            </div>
            <div style={{width:'20%', float:'left'}}>
            <input s={6} label="开始日期" name='on' type='text' id='startDate' className='datepicker' style = {{height:'1.5rem'}} onClose={function(e, value) {}} />
            </div>
            <div style={{width:'20%', float:'left'}}>
              <input placeholder="搜索房源" id="apartmentName" type="text" className="validate" />
            </div>
            <div style={{width:'20%', float:'left'}}>
              <input placeholder="搜索房源" id="apartmentName" type="text" className="validate" />
            </div>
            </div>

            <div className="search-bar-bottom">
              <Tags />
            </div>
          </div>


        <div id="profile">
          <div className="row">
          <div className= "col l4 s12 m6" >
            <LeasingCard houseImage = "/img/cv.jpg"
                       houseSex = "男女不限"
                       houseType = "2B2B"
                       houseName = "Costa Verde"
                       rent = "1000$"
                       duration = "1月/3月"
                       houseTitle = "CV village 2b/2b 男女不限" />
          </div>
          <div className = "col l4 s12 m6" >
            <LeasingCard houseImage = "/img/cv.jpg"
                                    houseSex = "男女不限"
                                    houseType = "2B2B"
                                    houseName = "Costa Verde"
                                    rent = "1000$"
                                    duration = "1月/3月"
                                    houseTitle = "CV village 2b/2b 男女不限" />
          </div>
          <div className= "col l4 s12" >
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

      <div className="col l5" style = {{height:'550px'}}>
        <GoogleMapTest />
      </div>
    </div>
    </div>
    );
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

export default SearchPage;
