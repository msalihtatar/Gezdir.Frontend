import React, { useEffect, useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TopPlaceCard from "../components/TopPlaceCard";

type Props = {};

const MainPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <>
        <div style = {{paddingTop:"6rem",paddingBottom:"4rem"}}>
          <h1 style={{letterSpacing: "3px"}}>WELCOME TO IZMIR</h1>
          <Button
            variant="warning"
            className="text-light mt-4"
            style={{width:"18rem",height:"4rem",fontSize:"20px"}}
            onClick={() => navigate("/discover")}
          >
            Start the Journey
          </Button>
        </div>

        <div className="d-flex justify-content-around pb-5 pt-5">
          
          <TopPlaceCard placeTypeId={1} image="/img/museum.jpg" cardTitle="Historical Places"></TopPlaceCard>
          <TopPlaceCard placeTypeId={2} image="/img/restaurant.jpg" cardTitle="Restaurants"></TopPlaceCard>
          <TopPlaceCard placeTypeId={3} image="/img/restaurant.jpg" cardTitle="Cafes&Bars"></TopPlaceCard>
          <TopPlaceCard placeTypeId={4} image="/img/beach.jpg" cardTitle="Costs&Beaches"></TopPlaceCard>
          <TopPlaceCard placeTypeId={4} image="/img/beach.jpg" cardTitle="Costs&Beaches"></TopPlaceCard>

        </div>

        <div style = {{backgroundImage:'url("/img/saatkulesiizmir.jpg")',backgroundSize:"cover", backgroundRepeat:"no-repeat",
         opacity: "0.6", position: "absolute", left: "0", top: "0", width: "100%", height: "100%", zIndex:"-1"}}>

      </div>
    </>
  );
};

export default MainPage;
