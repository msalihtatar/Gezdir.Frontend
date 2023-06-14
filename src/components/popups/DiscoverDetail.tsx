import React, { useMemo, useState } from "react";
import "../../css/map.css";
import { getLocationByPlaceId, getLocationByPlaceIdDummy } from "../../axios/gezdirAPI";
import { LocationDto } from "../../model/LocationDto";
import DetailMap from "../DetailMap";

type Props = { placeId: number };

// const center = {
//   lat: 38.4679,
//   lng: 27.2267,
// };

const DiscoverDetail = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [myLocationLoaded, setMyLocationLoaded] = useState(false);
  const [targetLocationLoaded, setTargetLocationLoaded] = useState(false);
  const classes = useMemo(
    () => `${!isActive ? "closed" : ""} card-body px-0`,
    [isActive]
  );

  const [myLocation, setMyLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [locationDetail, setLocationDetail] = React.useState<
    LocationDto | undefined
  >(undefined);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // console.log({ lat: latitude, lng: longitude });
      setMyLocation({ lat: latitude, lng: longitude });
      setMyLocationLoaded(true);
    }
    function error() {
      console.log("Unable to retrieve your location");
    }

    let locationDetail = getLocationByPlaceId(props.placeId);
    
    locationDetail
      .then((x) => {
        if (x.status === 200) {
          setLocationDetail(x.data);
          setTargetLocationLoaded(true);
        } else console.log(x.data);
      })
      .catch((ex) => console.log(ex.message));
  }, []);
  
  return (
      <section>
        <div className="card map-card border-0">
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container"
            style={{ height: "500px" }}
          >
            {targetLocationLoaded && myLocationLoaded ? (
              <DetailMap
                markers={{
                  xcoordinate: locationDetail?.xcoordinate ?? 0,
                  ycoordinate: locationDetail?.ycoordinate ?? 0,
                  myxcoordinate: myLocation?.lat ?? 0,
                  myycoordinate: myLocation?.lng ?? 0,
                }}
              />
            ) : (
              <></>
            )}
          </div>
          <div className={classes} onClick={() => setIsActive(!isActive)}>
            <div className="button px-2 mt-3">
              <a
                className="btn btn-floating btn-lg living-coral text-white float-end"
                style={{ marginRight: ".75rem", position:"absolute", right : 0 }}
              >
                <i className="bi bi-arrow-up-circle-fill"></i>
              </a>
            </div>
            <div className="bg-white px-4 pb-4 pt-3-5">
              <h5 className="card-title h5 living-coral-text">
                {locationDetail?.placeName??"Loading..."}
              </h5>
              <h6 className="h6 living-coral-text">
                Score: {locationDetail?.scoreNum??"Loading..."}
              </h6>
              <div className="d-flex justify-content-between living-coral-text">
                <h6 className="card-subtitle font-weight-light">
                {locationDetail?.explanation??"Loading..."}
                </h6>
              </div>
              <hr />
              <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text" style={{width:"100%"}}>
                <div style={{width:"34%"}}>
                  <i className="bi bi-train-front-fill" style={{color:'#fa7268',border:"5px"}}></i>
                  <p className="mb-0" style={{fontSize:"12px", fontWeight:"bold"}}>{locationDetail?.transportations.find(x=>x.transportationTypeId === 1)?.explanation??"-"}</p>
                </div>
                <div style={{width:"33%"}}>
                  <i className="bi bi-bus-front-fill" style={{color:'#fa7268',border:"5px"}}></i>
                  <p className="mb-0" style={{fontSize:"12px", fontWeight:"bold"}}>{locationDetail?.transportations.find(x=>x.transportationTypeId === 2)?.explanation??"-"}</p>
                </div>
                <div style={{width:"33%"}}>
                  <i className="bi bi-tsunami" style={{color:'#fa7268',border:"5px"}}></i>
                  <p className="mb-0" style={{fontSize:"12px", fontWeight:"bold"}}>{locationDetail?.transportations.find(x=>x.transportationTypeId === 3)?.explanation??"-"}</p>
                </div>
              </div>
              <hr />
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row" className="px-0 pb-3 pt-2">
                      <i className="bi bi-house-heart" style={{color:'#fa7268',border:"10px", fontSize:"30px", fontWeight:"bold"}}></i>
                    </th>
                    <td className="pb-3 pt-2" style={{color:'#fa7268', fontSize:"15px", fontWeight:"bold"}}>
                      {locationDetail?.address??"Address Not Found."}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  );
};

export default DiscoverDetail;
