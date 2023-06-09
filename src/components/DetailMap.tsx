import React from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { LocationModel } from "../model/LocationModel";

const containerStyle = {
  maxWidth: "23rem",
  height: "500px",
};

type Props = { markers: LocationModel };

function DetailMap(props: Props) {
    console.log(props);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCSm65xpi1A2LkLAFNtkCE9LeorYtg5E9k",
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(myCurrentLocation);
    // map.fitBounds(bounds);

    const bounds = new window.google.maps.LatLngBounds({lat :props.markers.myxcoordinate, lng:props.markers.myycoordinate});
    bounds.extend({lat :props.markers.xcoordinate, lng:props.markers.ycoordinate});
    
    //({lat: (props.markers.myxcoordinate - props.markers.xcoordinate));, lng: (props.markers.myycoordinate - props.markers.ycoordinate)});
    
    // let maxZoomRate = Math.max(Math.abs(props.markers.myxcoordinate - props.markers.xcoordinate), Math.abs(props.markers.myycoordinate - props.markers.ycoordinate)); 

    // console.log(maxZoomRate);
    map?.fitBounds(bounds);
    // map.setZoom(maxZoomRate / 10);
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
      center={{
        lat: (props.markers.xcoordinate + props.markers.myxcoordinate) / 2,
        lng: (props.markers.ycoordinate + props.markers.myycoordinate) / 2,
      }}
    //   zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        <Marker
          position={{
            lat: props.markers.myxcoordinate,
            lng: props.markers.myycoordinate,
          }}
          icon={"https://maps.google.com/mapfiles/ms/icons/red-dot.png"}
        />
        <Marker
          position={{
            lat: props.markers.xcoordinate,
            lng: props.markers.ycoordinate,
          }}
          icon={"https://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(DetailMap);
