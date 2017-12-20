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
        var imgStyle = {
            "backgroundImg" : ""
        };

        return (


            <div class = "leasingCard">
                <div class = "backgroundImg">
                    <img src={this.props.houseImage} />
                    <span class="tile" >
                        {this.props.houseTitle}
                    </span>
                    <div class = "row">
                        <div>
                            {this.props.houseSex}
                        </div>
                        <div>
                            {this.props.houseName}
                        </div>
                        <div class = "Col s4">
                            {this.props.rent}
                        </div>
                        <div class = "col s4">
                            {this.props.duration}
                        </div>
                        <div class = "col s4">
                            {this.props.houseType}
                        </div>
                    </div>


                </div>
            </div>


        );
    }


}
export default LeasingCard;
