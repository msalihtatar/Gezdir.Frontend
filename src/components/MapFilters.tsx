import React, { useState } from "react";
import { PlaceType } from "../model/PlaceType";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

type Props = { filtered: number[]; setFilter: Function };

const MapFilters = (props: Props) => {
  const handleChange = (val: number[]) => props.setFilter(val);

  return (
    <ToggleButtonGroup
      type="checkbox"
      value={props.filtered}
      onChange={handleChange}
    >
      <ToggleButton id="tbg-btn-1" variant="light" value={1}>
        Historical Place
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" variant="light" value={2}>
        Restaurant
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" variant="light" value={3}>
        Cafe
      </ToggleButton>
      <ToggleButton id="tbg-btn-4" variant="light" value={4}>
        Beach
      </ToggleButton>
      <ToggleButton id="tbg-btn-5" variant="light" value={5}>
        Park
      </ToggleButton>
      <ToggleButton id="tbg-btn-6" variant="light" value={6}>
        Hotel
      </ToggleButton>
      <ToggleButton id="tbg-btn-7" variant="light" value={7}>
        Others
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default MapFilters;
