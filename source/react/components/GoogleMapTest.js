import React from 'react';

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GoogleMapTest = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmglnfVoCJ5roESG_1ZdbbebdBnO5h3EY",
        loadingElement: <div style={{ height: `400%`, width: `50%` }} />,
        containerElement: <div style={{ height: `185px` }} />,
        mapElement: <div style={{ height: `400%`, width: `50%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
)((props) =>
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 32.859823, lng: -117.228794 }}>
        <Marker position={{ lat: 32.859823, lng: -117.228794 }} />
    </GoogleMap>
)

export default GoogleMapTest;
