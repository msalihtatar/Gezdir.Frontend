import React, { useEffect, useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TopPlaceCard from "../components/TopPlaceCard";
import ActivitySlider from "../components/ActivitySlider";
import OpenWeatherWidget from "../components/WeatherWidget";
import MainPageTabs from "../components/MainPageTabs";

type Props = {};

const MainPage = (props: Props) => {
    const navigate = useNavigate();

    const containerStyle: React.CSSProperties = {
        backgroundImage: "url(/img/izmir_new.jpg)",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -99,
        filter: 'blur(5px)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

    return (
        <>

            <div style={{ paddingTop: "6rem", paddingBottom: "4rem", }}>
                <h1 className="welcome">WELCOME TO IZMIR</h1>
                <div className="d-flex justify-content-center pt-5">
                    <button type="button" className="discover" role="button" onClick={() => navigate("/discover")}><span className="text">Start the Journey</span></button>
                </div>
                <div  className="activity-wrap">
                    <div className="text-white text-uppercase fw-bold activity">Check the activities nearby</div>
                </div>
            </div>

            <div className="d-flex justify-content-around pb-5 pt-5">
                <TopPlaceCard placeTypeId={1} image="/img/efes.jpg" cardTitle="Historical Places"></TopPlaceCard>
                <TopPlaceCard placeTypeId={2} image="/img/restaurant2.jpg" cardTitle="Restaurants"></TopPlaceCard>
                <TopPlaceCard placeTypeId={3} image="/img/cafe.jpg" cardTitle="Cafes&Bars"></TopPlaceCard>
                <TopPlaceCard placeTypeId={4} image="/img/beach.jpg" cardTitle="Costs&Beaches"></TopPlaceCard>
                <TopPlaceCard placeTypeId={5} image="/img/park.jpg" cardTitle="Parks"></TopPlaceCard>
            </div>
            <div style={{ backgroundColor: "#fff9" }}>
                <h5 className="pt-5 text-start">Activities</h5>
                <div className="d-flex justify-content-center">
                    <ActivitySlider></ActivitySlider>
                </div>
            </div>
            <div style={containerStyle} />
            {/* <div style = {{backgroundImage:'url("/img/saatkulesiizmir.jpg")',backgroundSize:"cover", backgroundRepeat:"no-repeat",
         opacity: "0.6", position: "absolute", left: "0", top: "0", width: "100%", height: "100%", zIndex:"-1"}}>
      </div> */}
        </>
    );
};

export default MainPage;
