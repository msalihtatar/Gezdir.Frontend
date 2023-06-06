import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import PlaceScore from "./PlaceScore";
import { PlaceDetail } from "../model/PlaceDetail";
import { getTopPlaces } from "../axios/gezdirAPI";

type Props = {
  placeTypeId: number;
  image: string;
  cardTitle: string;
};

const TopPlaceCard = (props: Props) => {
  const [place, setPlace] = useState<PlaceDetail[]>();
  useEffect(() => {
    return () => {
      let topPlaces = getTopPlaces(props.placeTypeId, 5);
      topPlaces
        .then((x) => {
          x.status === 200 ? setPlace(x.data) : console.log(x.data);
        })
        .catch((ex) => console.log(ex.message));
      // result.then(x => { x.data.isSuccess ? setTokenData(x.data.data) : displayError(x.data.message) }).catch(ex => console.log(ex));
    };
  }, [props.placeTypeId]);

  return (
    <Card style={{ width: "17rem" }}>
      <Card.Img style={{height: "10rem", aspectRatio: "1/1", objectFit: "cover"}} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>

        {place?.map((p) => {
          return <PlaceScore p={p} key={p.placeId}></PlaceScore>;
        })}
      </Card.Body>
    </Card>
  );
};

export default TopPlaceCard;
