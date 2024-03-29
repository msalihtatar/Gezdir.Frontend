import React from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import { LocationDetail} from "../model/LocationDetail";

const containerStyle = {
  width: "700px",
  height: "600px",
};

function GoogleMaps({
  markers,
  myCurrentLocation,
}: {
  markers: LocationDetail[];
  myCurrentLocation: any;
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "***********",
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [infoWindowData, setInfoWindowData] = React.useState<{
    id: number;
    address: JSX.Element;
  }>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleMarkerClick = (
    id: number,
    lat: number,
    lng: number,
    address: JSX.Element
  ) => {
    map?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(myCurrentLocation);
    // map.fitBounds(bounds);
    map.setZoom(13)
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      options={{
        styles: [
          {
            elementType: "labels",
            featureType: "poi.business",
            stylers: [{ visibility: "off" }]
          },
        ],
      }}
      // clickableIcons={true}
      mapContainerStyle={containerStyle}
      center={myCurrentLocation}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        <Marker
          position={myCurrentLocation}
          icon={"https://maps.google.com/mapfiles/ms/icons/red-dot.png"}
          onClick={() => {
            handleMarkerClick(
              -99,
              myCurrentLocation.lat,
              myCurrentLocation.lng,
              <h3>You are Here Now.</h3>
            );
          }}
        >
          {isOpen && infoWindowData?.id === -99 && (
            <InfoWindow
              onCloseClick={() => {
                setIsOpen(false);
              }}
            >
              <h3>You are Here Now.</h3>
            </InfoWindow>
          )}
        </Marker>
      </>
      {markers.map((loc) => {
        return (
          <>
            <Marker
              key={loc.locationId}
              icon={loc.isSuggested ? "http://maps.google.com/mapfiles/ms/icons/orange-dot.png" : "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              position={{ lat: loc.xcoordinate, lng: loc.ycoordinate }}
              onClick={() => {
                handleMarkerClick(
                  loc.locationId,
                  loc.xcoordinate,
                  loc.ycoordinate,
                  <><h5>{loc.placeName} - {loc.scoreNum}</h5><h6>{loc.explanation}</h6></>
                );
              }}
            >
              {isOpen && infoWindowData?.id === loc.locationId && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {infoWindowData.address}
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

export default React.memo(GoogleMaps);
