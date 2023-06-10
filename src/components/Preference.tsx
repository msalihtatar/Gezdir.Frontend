import React from "react";
import { LocationDetail } from "../model/LocationDetail";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalPopupDiscover from "./popups/ModalPopupDiscover";

type Props = { preference: LocationDetail };

const Preference = (props: Props) => {
    const navigate = useNavigate();
    // console.log(props.preference)
    return (

        <ModalPopupDiscover placeId={Number(props.preference.placeId)}>
            {(handleShow: any) => (
                // this is a valid React element that uses handleShow
                <Button
                    className={props.preference.isSuggested ? "bg-warning border" : "bg-light border text-dark"}
                    onClick={() => handleShow()}
                >
                    <div className="d-flex justify-content-between ps-4 pe-4">
                        <h4 placeholder="Place Name">{props.preference.placeName}</h4>
                        <h4 placeholder="Score">{props.preference.scoreNum}</h4>
                    </div>
                </Button>
            )}
        </ModalPopupDiscover>

    );
};

export default Preference;
