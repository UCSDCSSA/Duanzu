/**
* @author: Wenlin Mao, Tianyang Lu
* @date: 2017/11/12
*/

import React from 'react';


import {Link} from 'react-router-dom';

import {
   Card,
   Collection,
   CollectionItem,
   Row,
   Col,
   Input,
   Icon,
   CardTitle,
   Tabs,
   Tab
} from 'react-materialize';

class LeasingCard extends React.Component {
    render () {
      // The default card component may not achieve the design graph
      // Consider build our own "card" components

        var imgName = this.props.houseImage;
        var houseName = this.props.houseName;
        var gender = this.props.houseSex;

        var genderColor;

        checkGender(gender)
        function checkGender(gender) {
            if (gender == "男女不限") {
                genderColor = '#00897b';
            } else if (gender == '只限女生') {
                genderColor = '#e53935';
            } else if (gender == '只限男生'){
                genderColor = '#01579b';
            }
        }

        return (
            <div className = "leasingCard" style={{
                overflow: 'hidden',
                height: '280px',
                width: '100%',
                position: 'relative',
               }}>


                <div className = "row" style = {{position:'relative',bottom:'0px',marginTop:'0px'}}>
                    <img src={imgName} style= {{height:'180px', width:'100%',marginBottom:'0px'}}/>

                    <h4 className = "col s12" style = {{
                        marginTop: '-2px',
                        marginBottom:'0px',
                        color:'black',
                        marginLeft:'5px',
                        fontSize:'14px'}}>
                        {houseName}
                    </h4>


                    <div className="col s12" style= {{
                            //marginTop:'1px',
                            color:'black',
                            fontSize:'18px',
                            marginLeft:'5px',
                            fontWeight:'bold' }}>
                        {this.props.houseTitle}
                    </div>

                    <div className = "col" style = {{
                            backgroundColor: genderColor,
                            width:'27%',
                            marginLeft:'5px',
                            marginTop:'3px',
                            fontSize:'14px',
                            color:'white' }}>
                        {gender}
                    </div>

                    <div className = "detailInfo" style={{width:'100%',marginTop:'80px',position:'relative'}}>
                        <div className = "col s4" style = {{
                                marginTop: '-10px',
                                color:'black',
                                //marginLeft:'5px',
                                fontSize:'14px'
                            }}>
                            {this.props.rent}
                        </div>

                        <div className = "col s4" style = {{
                                marginTop: '-10px',
                                color:'black',
                                //marginLeft:'5px',
                                fontSize:'14px' }}>
                            {this.props.duration}
                        </div>

                        <div className = "col s4" style = {{
                            //marginLeft:'0px',
                            color:'black',
                            marginTop: '-10px',
                            fontSize:'14px' }}>
                            {this.props.houseType}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default LeasingCard;
