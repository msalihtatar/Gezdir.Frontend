import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoogleMaps from "../components/GoogleMaps";
import { getAllLocations } from "../axios/gezdirAPI";
import { LocationDetail} from "../model/LocationDetail";
import { Col, Container, Form, Row } from "react-bootstrap";
import PreferencesTable from "../components/PreferencesTable";
import MapFilters from "../components/MapFilters";

type Props = {};

const Discover = (props: Props) => {
  const {} = useParams();

  const [location, setLocation] = React.useState<LocationDetail[] | undefined>(
    undefined
  );
  const [filteredLocation, setFilteredLocation] = React.useState<LocationDetail[] | undefined>(
    undefined
  );

  const [myLocation, setMyLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [filtered, setFilter] = useState([1, 2, 3, 4, 5, 6, 7]);

  const filterHandleChange = (val: number[]) => {
    setFilter(val);
    // setFilteredLocation(location?.filter((x) => val.includes(x.placeTypeId)));
    setFilteredLocation(location?.filter((x) => val.includes(x.placeTypeId) && (!isChecked || x.isSuggested)));
  };
  
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
      // console.log({ lat: latitude, lng: longitude });
      setMyLocation({ lat: latitude, lng: longitude });
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
            setFilteredLocation(x.data);
          } else console.log(x.data);
        })
        .catch((ex) => console.log(ex.message));
    };
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked: any) => {setIsChecked(checked.target.checked);
    setFilteredLocation(location?.filter((x) => filtered.includes(x.placeTypeId) && (!checked.target.checked || x.isSuggested)));};

  return (
    <>
      {location && myLocation && filteredLocation ? (
        <Container className="pt-3">
          <Row className="pb-3">
            <Col xs={8}><MapFilters filtered={filtered} setFilter={filterHandleChange} /></Col>
            <Col xs={4}>
            <div className="d-flex flex-row-reverse form-control-lg">
              <span className="me-2 form-control-sm">{"Suggested Place"}</span>
              <Form.Check
                type="switch"
                id="toggle-switch"
                label=""
                checked={isChecked}
                onChange={handleToggle}
              />
              <span className="me-2 form-control-sm">{"All Place"}</span>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <GoogleMaps markers={filteredLocation} myCurrentLocation={myLocation} />
            </Col>
            <Col>
              <PreferencesTable locations={filteredLocation}/>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>Yükleniyor</div>
      )}
    </>
    // <div>Discover{id}</div>
  );
};

export default Discover;
