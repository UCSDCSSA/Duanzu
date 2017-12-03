/**
   * @author: Liby Lee
   * @date: 2017/11/11
   */

// Import react related components
import React from 'react';

const ProfileSidebar = () => {
    return (<div>
        <ul id="slide-out" className="side-nav">
            <li>
                <a href="#!">
                    <i className="material-icons">cloud</i>First Link With Icon
                </a>
            </li>
            <li>
                <a href="#!">Second Link</a>
            </li>
            <li>
                <div className="divider"></div>
            </li>
            <li>
                <a className="subheader">Subheader</a>
            </li>
            <li>
                <a className="waves-effect" href="#!">Third Link With Waves</a>
            </li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse">
            <i className="material-icons">menu</i>
        </a>
    </div>);
};

export default ProfileSidebar;
