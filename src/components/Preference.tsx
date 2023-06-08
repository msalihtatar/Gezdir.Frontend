import React from "react";
import { PlaceDetail } from "../model/PlaceDetail";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type Props = { preference: PlaceDetail };

const Preference = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Button
      className="bg-warning border"
      onClick={() => navigate(`/discover/${props.preference.placeId}`)}
    >
      <h4>{props.preference.placeName} {props.preference.scoreNum}</h4>
    </Button>
  );
};

export default Preference;
