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
                height: '290px',
                width: '100%',
                position: 'relative',
               }}>


                <div className = "row" style = {{position:'absolute',bottom:'0px',margin:'0px'}}>
                    <img src={imgName} style= {{height:'195px', width:'100%',marginBottom:'0px'}}/>

                    <h4 className = "col s12" style = {{
                        marginTop: '0px',
                        marginBottom:'0px',
                        color:'black',
                        marginLeft:'5px',
                        fontSize:'14px'}}>
                        {houseName}
                    </h4>


                    <div className="col s12" style= {{
                            marginTop:'2px',
                            color:'black',
                            fontSize:'18px',
                            marginLeft:'5px',
                            fontWeight:'bold' }}>
                        {this.props.houseTitle}
                    </div>

                    <div className = "col s12" style = {{
                            //backgroundColor: genderColor,
                            //width:'27%',
                            marginLeft:'5px',
                            marginTop:'5px',
                            fontSize:'14px',
                            color:'white' }}>
                        <div style={{backgroundColor: genderColor, width:'25%',height:'20px', marginLeft:'0px'}}>
                        {gender}
                        </div>
                    </div>

                    <div className = "detailInfo" style={{width:'100%',marginTop:'80px',position:'relative',marginLeft:'5px'}}>
                        <div className = "col s4" style = {{
                                marginTop: '-10px',
                                color:'black',
                                fontSize:'14px'
                            }}>

                            {this.props.rent}
                        </div>

                        <div className = "col s4" style = {{
                                marginTop: '-10px',
                                color:'black',
                                fontSize:'14px' }}>
                            {this.props.duration}
                        </div>

                        <div className = "col s4" style = {{
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
