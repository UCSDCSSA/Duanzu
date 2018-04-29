import React from 'react';

import GoogleMapTest from './GoogleMapTest';

class MapInstanceTest extends React.Component {
    render () {
        var inst = <GoogleMapTest />;
        setTimeout(function () {
            inst.callMe();
        }, 5000);
        return inst;
    }
}

export default MapInstanceTest;
