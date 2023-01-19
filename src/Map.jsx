import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, {useEffect, useState} from "react";

const containerStyle = {
    width: '400px',
    height: '400px'
};


function Map() {
    const [latc, setlat] = useState(0)
    const [longc, setlong] = useState(0)
    useEffect(() => {
        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition(function(position) {
                setlat(position.coords.latitude)
                setlong(position.coords.longitude)
            });

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
    }

    return (
        <>
            <LoadScript
                googleMapsApiKey="AIzaSyCia3gr_Eu4VMowqTzoORnCm7m5k87KGwI"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onClick={getCoords}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                </GoogleMap>
                <p>Your coordinates</p>
                <span>{latc}</span>
            </LoadScript>

        </>

    )
}

export default Map