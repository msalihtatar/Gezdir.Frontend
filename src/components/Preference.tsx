import React from "react";
import { LocationDetail } from "../model/LocationDetail";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalPopupDiscover from "./popups/ModalPopupDiscover";
import '../css/location.css'

type Props = { preference: LocationDetail };


const TypeName = (typeId: number) => {
    switch (typeId) {
        case 1:
            return "Historical";
        case 2:
            return "Restaurant";
        default:
            return "Undefined";
    }
}

const Preference = (props: Props) => {
    const navigate = useNavigate();
    // console.log(props.preference)
    return (

        <ModalPopupDiscover placeId={Number(props.preference.placeId)}>
            {(handleShow: any) => (
                <div className={"d-flex bd-highlight p-2 paper" + (props.preference.isSuggested?" bg-suggested":" bg-light")} onClick={() => handleShow()}>
                    <div className="text-start  flex-grow-1 bd-highlight">
                        <h5 placeholder="Place Name">{props.preference.placeName}</h5>
                        <p className="text-muted mb-0 ps-2">{TypeName(props.preference.placeTypeId)}</p>
                    </div>
                    {props.preference.isSuggested &&
                        <div className="ps-auto align-self-center pe-2">
                            <Badge className="bg-warning"><i className="bi bi-star-fill pe-1"></i>Suggested</Badge>
                        </div>}
                    <div className="align-self-center">
                        <span className="fw-light text-muted text-8r">Score</span>
                        <h3 placeholder="Score">{props.preference.scoreNum}</h3>
                    </div>
                </div>
            )}
        </ModalPopupDiscover>

    );
};

export default Preference;
