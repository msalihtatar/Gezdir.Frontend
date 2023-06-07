import React from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import { Location as LocationModel } from "../model/Location";

const containerStyle = {
  width: "800px",
  height: "800px",
};

function GoogleMaps({
  markers,
  myCurrentLocation,
}: {
  markers: LocationModel[];
  myCurrentLocation: any;
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCSm65xpi1A2LkLAFNtkCE9LeorYtg5E9k",
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [infoWindowData, setInfoWindowData] = React.useState<{
    id: number;
    address: string;
  }>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleMarkerClick = (
    id: number,
    lat: number,
    lng: number,
    address: string
  ) => {
    map?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(myCurrentLocation);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);
  console.log(isLoaded);
  return isLoaded ? (
    <GoogleMap
      options={{
        styles: [
          {
            elementType: "labels",
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
        ],
      }}
      // clickableIcons={true}
      mapContainerStyle={containerStyle}
      center={myCurrentLocation}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        <Marker
          position={myCurrentLocation}
          icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
          onClick={() => {
            handleMarkerClick(
              -99,
              myCurrentLocation.lat,
              myCurrentLocation.lng,
              "Current Location"
            );
          }}
        >
          {isOpen && infoWindowData?.id === -99 && (
            <InfoWindow
              onCloseClick={() => {
                setIsOpen(false);
              }}
            >
              <h3>{"Current Location"}</h3>
            </InfoWindow>
          )}
        </Marker>
      </>
      {markers.map((loc) => {
        return (
          <>
            <Marker
              key={loc.locationId}
              icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              position={{ lat: loc.xcoordinate, lng: loc.ycoordinate }}
              onClick={() => {
                handleMarkerClick(
                  loc.locationId,
                  loc.xcoordinate,
                  loc.ycoordinate,
                  "address"
                );
              }}
            >
              {isOpen && infoWindowData?.id === loc.locationId && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h3>{infoWindowData.address}</h3>
                </InfoWindow>
              )}
            </Marker>
          </>
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMaps;
