/**
 * @author: Yuhan Wang, Zixin Shen
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';

// Import UI Components
import {Input, Button, Card, Row, Col, Icon} from 'react-materialize';
import Header from './Header';
import LeasingCard from './LeasingCard';

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
                    "backgroundColor": "rgba(0, 0, 255, 1)"
                } : {}
            } onClick={(e) => this.click(e)}>
                <i className="material-icons">{this.props.icon}</i>
                {this.props.text}
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
            <div>
                {tagElements}
            </div>
        );
    }
}

class SearchPage extends React.Component {
  render(){
    return(
      <div className="search-page">
      <Header/>
      <Tags />
    <div className="row">
      <div className="col l7 s12">
        <div id="SearchBar" className="input-field col s12">

          <Row>
          <div className="col l2 searchItem" >

              <Input placeholder="搜索房源" id="apartmentName" type="text" className="validate">
                  <Icon>account_circle</Icon>
              </Input>
          </div>
          <div className="col l4">
              <Input placeholder="搜索房源" id="apartmentName" type="text" className="validate" >
                <Icon style={{fontSize:'0.1 px'}}>insert_chart </Icon>
              </Input>
          </div>
          <div className="col l2">
              <Input placeholder="搜索房源" id="apartmentName" type="text" className="validate" >
                <Icon style={{fontSize:'0.1 px'}}>insert_chart </Icon>
              </Input>
          </div>
          <div className="col l2">
              <Input placeholder="搜索房源" id="apartmentName" type="text" className="validate" >
                <Icon style={{fontSize:'0.1 px'}}>insert_chart </Icon>
              </Input>
          </div>
          <div className="col l2">
              <Input placeholder="搜索房源" id="apartmentName" type="text" className="validate" >
                <Icon style={{fontSize:'0.1 px'}}>insert_chart </Icon>
              </Input>
          </div>
          </Row>

          <Row>
            <div className="">

            </div>

          </Row>
        </div>



        <div id="Tag">

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

      <div className="col l5">

      </div>
    </div>
    </div>
    );
  }
  componentDidMount() {

  }
};

export default SearchPage;
