/**
 * @author: Tianyang Lu Xuran Liu
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import { Input, Button, Card, Row, Col, Icon } from 'react-materialize';
import Header from './Header';
import LeasingCard from './LeasingCard';
import GoogleMapTest from './GoogleMapTest';
import './styles/search-page.scss';

class Tag extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    getStyle() {
        return {
            "display": "inline-block",
            "margin": "3px 5px",
            "padding": "5px 10px",
            "borderRadius": "2px",
            "color": this.state.active ? "white" : "black",
            "backgroundColor": this.state.active ? "#2a6b93" : "#DCDCDC",
            "cursor": "pointer"
        };
    }

    click() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <span style={this.getStyle()} onClick={(e) => this.click(e)}>
                <span>
                    <Icon tiny={true}>{this.props.icon}</Icon>
                    <span>
                        {this.props.text}
                    </span>
                </span>
            </span>
        );
    }
}

class Tags extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            tags: [
                { "icon": "fitness_center", "text": "健身房" },
                { "icon": "local_parking", "text": "车位" },
                { "icon": "opacity", "text": "水电" },
                { "icon": "local_laundry_service", "text": "洗衣机" },
                { "icon": "sentiment_satisfied", "text": "烘干机" },
                { "icon": "sentiment_satisfied", "text": "公共洗衣房" },
                { "icon": "pool", "text": "游泳池" },
                { "icon": "pets", "text": "宠物" },
                { "icon": "tv", "text": "电视" },
                { "icon": "sentiment_satisfied", "text": "空调" }
            ]
        }
    }

    render() {
        var tagElements = [];
        for (var i = 0; i < this.state.tags.length; i++) {
            tagElements.push(<Tag key={i} icon={this.state.tags[i].icon} text={this.state.tags[i].text}/>)
        }
        return (
            <div style={{ "margin": "10px" }}>
                {tagElements}
            </div>
        );
    }
}

class RowItem extends React.Component{
  render(){

    return (
      <div className = "row" style={{margin:'auto'}}>
        <div style={{marginTop:'20px'}} className= "col l4 s12 m4 leasing-col">
            <LeasingCard houseImage = "/img/towers.jpg"
                 houseSex = "只限女生"
                 houseType = "2B2B"
                 houseName = "Towers"
                 rent = "1000"
                 startDate="7"
                 endDate="8"
                 houseTitle = "SS2 CV主卧招租" />
        </div>
        <div style={{marginTop:'20px'}} className= "col l4 s12 m4 leasing-col">
            <LeasingCard houseImage = "/img/towers.jpg"
                 houseSex = "只限女生"
                 houseType = "2B2B"
                 houseName = "Towers"
                 rent = "1000"
                 startDate="7"
                 endDate="8"
                 houseTitle = "SS2 CV主卧招租" />
        </div>
        <div style={{marginTop:'20px'}} className= "col l4 s12 m4 leasing-col">
            <LeasingCard houseImage = "/img/towers.jpg"
                 houseSex = "只限女生"
                 houseType = "2B2B"
                 houseName = "Towers"
                 rent = "1000"
                 startDate="7"
                 endDate="8"
                 houseTitle = "SS2 CV主卧招租" />
        </div>
      </div>
    );
  }
}

class SearchPage extends React.Component {
  handleClick (){
      window.location.href = '/#/display'
  }
  render(){
    return (
      <div className="search-page" style={{position: "fixed", height: "calc(100%)", width: "100%"}}>

      <Header/>

        <div className="row" style={{height: 'calc(100% - 60px)'}}>
            <div className="col l7 s12">
            <div className="search-bar" >
              <div className="search-bar-top">

                <div className="search_icon">
                  <Icon tiny={true}> home </Icon>
                </div>

                <div className="search_separated_div">
                    <Input placeholder="搜索房源" id="apartmentName" type="text" className="validate" display="inline-block"/>
                </div>

                <div className="search_icon">
                    <Icon tiny={true}> date_range </Icon>
                </div>

                <div style={{ display: 'flex' }}>
                    <Input placeholder="开始日期" name='off' type='text' id='startDate' className='datepicker' style={{
                            height: '1.5rem'
                        }} onClose={function(e, value) {}}/>
                </div>

                <div style={{display: 'flex', lineHeight: '58px' }}>
                    至
                </div>

                <div style={{ lineHeight: '58px' }} className="search_separated_div">
                    <input s={6} placeholder="结束日期" name='off' type='text' id='endDate' className='datepicker' style={{
                            height: '1.5rem'
                        }}
                        onClose={function(e, value) {}}/>
                </div>

                <div className="search_icon">
                    <Icon tiny={true}>
                        local_hotel
                    </Icon>
                </div>

                <div className="search_separated_div">
                    <Input placeholder="房型" id="apartmentName" type="text" className="validate"/>
                </div>

                <div className="search_icon">
                    <Icon tiny={true}>
                        attach_money
                    </Icon>
                </div>

                <div className="search_separated_div">
                    <Input placeholder="价格" id="apartmentName" type="text" className="validate"/>
                </div>

                <div className="search_icon">
                    <Icon tiny={true}>
                        supervisor_account
                    </Icon>
                </div>

                <div style={{ display: 'flex' }}>
                    <Input placeholder="租客性别" id="apartmentName" type="text" className="validate"/>
                </div>
            </div>

            <Tags />
            </div>

            <div id="profile" style={{overflowY: "scroll", maxHeight: "calc(100% - 246px)",  width: "58.33333%", paddingRight: 0, position: "absolute" }}>
                <RowItem />
                <RowItem />
                <RowItem />
            </div>
            </div>

            <div className="col l5" style = {{height:'calc(100%)'}}>
                <GoogleMapTest />
            </div>
        </div>
      </div>
    )
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
