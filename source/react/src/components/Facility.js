/**
* @author: Zixin Shen, Yuhan Wang
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

/**
 * {
 *     icon_id: <Materialize Icon Id>,
 *     text: <text to display>
 * }
 **/
class Facility extends React.Component {
    render() {
        var css = {};
        if (!this.props.avail) {
            css = {
                color: "rgba(150, 150, 150, 1)"
            }
        }
        return (
            <div style={css}>
                <i className="material-icons">{this.props.icon_id}</i> {this.props.text}
            </div>
        );
    }
};

export default Facility;
