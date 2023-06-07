import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoogleMaps from "../components/GoogleMaps";
import { getAllLocations } from "../axios/gezdirAPI";
import { Location as LocationModel } from "../model/Location";
import { Console } from "console";

type Props = {};

const Discover = (props: Props) => {
  const {} = useParams();

  const [location, setLocation] = React.useState<LocationModel[] | undefined>(
    undefined
  );

  const [myLocation, setMyLocation] = useState<{lat: number, lng: number} | null>(null)

  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    const center = {
      lat: 38.4679,
      lng: 27.2267,
    };

    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log({lat: latitude, lng: longitude})
      setMyLocation({lat: latitude, lng: longitude})
    }
    function error() {
      console.log("Unable to retrieve your location");
    }

    return () => {
      let allLocations = getAllLocations();
      allLocations
        .then((x) => {
          if (x.status === 200) {
            setLocation(x.data);
          } else console.log(x.data);
        })
        .catch((ex) => console.log(ex.message));
    };
  }, []);

  return (
    <>
      {location && myLocation ? (
        <GoogleMaps markers={location} myCurrentLocation={myLocation} />
      ) : (
        <div>Yükleniyor</div>
      )}
    </>
    // <div>Discover{id}</div>
  );
};

export default Discover;
