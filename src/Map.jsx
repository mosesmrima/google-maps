import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, {useEffect, useState} from "react";

const containerStyle = {width: '700px',
    height: '600px'
};

const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
};
function Map() {
    const [latc, setlat] = useState(0)
    const [longc, setlong] = useState(0)
    const [showMap, toggleShowMap] = useState(false)
    useEffect(() => {
        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition(function(position) {
                setlat(position.coords.latitude)
                setlong(position.coords.longitude)
            }, ()=>{console.log('errrr')}, options);

        } else {

            console.log("Not Available");

        }
    }, [])
    const center = {
        lat: latc,
        lng: longc
    };
    const getCoords = (t) => {
        const lat = t.latLng.lat()
        const long = t.latLng.lng()
        setlat(lat)
        setlong(long)
    }
    const toggleMap = () => toggleShowMap(prev => !prev)

    return (
        <>
            <LoadScript
                googleMapsApiKey="AIzaSyCia3gr_Eu4VMowqTzoORnCm7m5k87KGwI"
            >
                {showMap && <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={100}
                    onClick={getCoords}
                >
                   <Marker position={{ lat: latc, lng: longc }}/>
                </GoogleMap>}
                <p>Your coordinates</p>
                <span>latitude: {latc}</span>
                <br/>
                <span>longitude: {longc}</span>
                <br/>
                <button onClick={toggleMap}>Show Map</button>
            </LoadScript>

        </>

    )
}

export default Map