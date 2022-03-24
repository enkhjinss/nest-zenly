import { useState, useEffect, useRef } from "react";

export const MapContainer = () => {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    const [myCoords, setMyCoords] = useState({});
    // const [makerIndex, setMakerIndex] = useState(0);

    useEffect(() => {
        mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
            center: { lat: 47.9173099, lng: 106.9149359 },
            zoom: 10,
        });

        const locationId = navigator.geolocation.watchPosition(({ coords }) => {
            setMyCoords({
                lat: coords.latitude,
                lng: coords.longitude,
            });
        });

        return () => {
            navigator.geolocation.clearWatch(locationId);
        };
    }, []);

    useEffect(() => {
        if (!myCoords.lat) return;

        mapRef.current.setCenter(myCoords);
        const myMarker = new window.google.maps.Marker({
            position: myCoords,
            map: mapRef.current,
        });

        return () => {
            myMarker.setMap(null);
        };
    }, [myCoords]);
    return (
        <>
            <div id="map" ref={mapContainerRef}></div>
        </>
    );
};
