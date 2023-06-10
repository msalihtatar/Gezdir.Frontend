import exp from "constants";
import React, { useEffect } from "react";
import { Stack } from "react-bootstrap";
import { getAllLocations, getPreferencedLocations } from "../axios/gezdirAPI";
import { LocationDetail } from "../model/LocationDetail";
import Preference from "./Preference";

type Props = {locations: LocationDetail[]};

const PreferencesTable = (props: Props) => {
  return (
    <>
      <Stack gap={3} style={{ maxHeight: "600px", overflow: "auto" }} className="p-3 pt-1">
        {props.locations?.map((x) => (
          <Preference key={x.placeId} preference={x} />
        ))}
      </Stack>
    </>
  );
};

export default PreferencesTable;
