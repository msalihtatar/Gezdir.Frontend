import React from "react";
import { LocationDetail } from "../model/LocationDetail";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type Props = { preference: LocationDetail };

const Preference = (props: Props) => {
  const navigate = useNavigate();
  // console.log(props.preference)
  return (
    
    <Button
      className= {props.preference.isSuggested ? "bg-warning border" : "bg-light border text-dark"}
      onClick={() => navigate(`/discover/${props.preference.placeId}`)}
    >
      <div className="d-flex justify-content-between ps-4 pe-4"> 
        <h4 placeholder="Place Name">{props.preference.placeName}</h4>
        <h4 placeholder="Score">{props.preference.scoreNum}</h4>
      </div>
    </Button>
  );
};

export default Preference;
