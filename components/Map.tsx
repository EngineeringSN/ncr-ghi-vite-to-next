
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  height?: string;
}

const Map = ({ height = '200px' }: MapProps) => {
  // The location of SecureNow office in Gurugram
  const position = {
    lat: 28.451807,
    lng: 77.085599
  };
  
  const mapContainerStyle = {
    height,
    width: '100%'
  };

  return (
    <div className="rounded-lg overflow-hidden" style={{ height }}>
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={position}
          zoom={15}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false
          }}
        >
          <Marker position={position} title="SecureNow Office" />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
