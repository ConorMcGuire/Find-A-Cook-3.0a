import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      style={{width: "100%", height:"30%"}}
      zoom={14}
      initialCenter={{
        lat: 37.7749,
        lng: -122.4194,
      }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBCK-4YK-v9b3hh75bij1OobcqiCg5MgZU',
})(MapContainer);
