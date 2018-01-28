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

        return (


            <div className = "leasingCard" style={{
                         borderRadius: '5px',
                         backgroundImage: 'url(' + imgName + ')',
                         backgroundSize: 'cover',
                         overflow: 'hidden',
                         height: '200px',
                         position: 'relative'
            }}>


                <div className="container" style= {{
                        marginTop:'10px',
                        color:'white',
                        fontSize:'14px'

                }}>
                        {this.props.houseTitle}
                </div>


                <div className = "row" style = {{
                        position: 'absolute',
                        bottom: '0px'
                }}>
                    <div className = "col s12" style = {{
                        backgroundColor: 'lightblue',
                        width:'50%',
                        marginLeft:'15px',
                        color:'white'
                    }}>
                        {this.props.houseSex}
                    </div>

                    <h4 className = "col s12" style = {{
                        marginTop: '-2px',
                        color:'white',
                        fontSize:'18px'

                    }}>
                        {houseName}
                    </h4>


                    <div className = "col s4" style = {{
                        marginTop: '-14px',
                        color:'white',
                        fontSize:'12px'

                    }}>
                        {this.props.rent}
                    </div>
                    <div className = "col s4" style = {{
                        marginTop: '-14px',
                        color:'white',
                        fontSize:'12px'

                    }}>
                        {this.props.duration}
                    </div>
                    <div className = "col s4" style = {{
                        marginTop: '-14px',
                        color:'white'
                    }}>
                        {this.props.houseType}
                    </div>
                </div>


            </div>



        );
    }


}
export default LeasingCard;
