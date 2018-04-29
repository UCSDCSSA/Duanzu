import React from 'react';

import { compose, withProps, withState, withHandlers, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,FusionTablesLayer } from "react-google-maps"

const GoogleMapTest = compose(
    lifecycle({
        callMe () {
            alert("hahahah");
        }
    }),
    withState(
        "currMarker",
        "setCurrMarker",
        { lat: 32.859823, lng: -117.228794 }
    ),
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmglnfVoCJ5roESG_1ZdbbebdBnO5h3EY",
        loadingElement: <div style={{ height: `100%`, width: `100%` }} />,
        containerElement: <div style={{ position: "fixed", height: "100%", width: "100%" }} />,
        mapElement: <div style={{ height: `100%`, width: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    return (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 32.859823, lng: -117.228794 }}>
            <Marker position={{ lat: props.currMarker.lat, lng: props.currMarker.lng }} />
        
        <FusionTablesLayer
        url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
        options={{
          query: {
            select: `Geocodable address`,
            from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
          }
        }}
        />
        </GoogleMap>
    )
});

export default GoogleMapTest;
