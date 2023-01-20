import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, {useEffect, useState} from "react";

const containerStyle = {
    width: '100%',
    height: '79vh',
    margin: "20px",
};

const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
};
function Map() {
    const [latc, setlat] = useState(0)
    const [longc, setlong] = useState(0)
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
                   <Marker position={{ lat: latc, lng: longc }}/>
                </GoogleMap>
            </LoadScript>

        </>

    )
}

export default Map