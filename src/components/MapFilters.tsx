import React, { useState } from "react";
import { PlaceType } from "../model/PlaceType";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

type Props = { filter: boolean[]; setFilter: Function };
const filterList = ["", "Historical", "Restaurant", "Cafe / Bar", "Coast / Beach", "Park", "Hotel", "Other"];
const MapFilters = (props: Props) => {
    // const handleChange = (val: number[]) => props.setFilter(val);

    const handleChange = (index: number) => { props.filter[index] = !props.filter[index]; props.setFilter([...props.filter]); };

    return (
        <>
            {filterList.map((elem: string, i: number) => {
                if(i===0){
                    return;
                }
                return (
                    <div key={i} className={`form-check chip ${props.filter[i] ? "selected-chip" : ""}`} onClick={() => handleChange(i)}>
                        <input className="form-check-input" type="checkbox" value="" id={"chip" + i} defaultChecked={props.filter[i]} onClick={() => handleChange(i)} />
                        <label className="form-check-label" htmlFor={"chip" + i}>
                            {elem}
                        </label>
                    </div>);
            })}
        </>
    );
};

export default MapFilters;
