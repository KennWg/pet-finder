import React, {useState} from 'react';
import alertMarker from '../../../assets/icons/map-marker.ico'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// process.env.PET_ALERT_GOOGLE_MAPS_API_KEY

function GMap({petName, _id}) {
    //For development: marker dissapears on re-render without unique key
    const randomKey = Math.floor(Math.random() * 1000);
    console.log(randomKey);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAH2HDQneS4AOvKsLenr6A9s90wO5A4IcY'
    })
  
    const mapPosition = {  
        lat: 43.6491,
        lng: -79.3959 
    } 

    const position = { 
        lat: 43.6491, 
        lng: -79.3959
    }



    if (!isLoaded) return <div> LOADING...</div>

    return (
        <>
            <GoogleMap
                zoom={17}  
                center={mapPosition}  
                mapContainerClassName="map-div"  
                defaultTilt={5}
                >
                <Marker key={randomKey} title={petName}  icon={alertMarker} position={position} />

            </GoogleMap>
        </>

    )

};


export default GMap;

