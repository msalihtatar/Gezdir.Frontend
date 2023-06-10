import exp from "constants";
import React, { useEffect } from "react";
import { Stack } from "react-bootstrap";
import { getAllLocations, getPreferencedLocations } from "../axios/gezdirAPI";
import { LocationDetail } from "../model/LocationDetail";
import Preference from "./Preference";

type Props = {locations: LocationDetail[]};

const PreferencesTable = (props: Props) => {
  // const [preferences, setPreferences] = React.useState<
  //   LocationDetail[] | undefined
  // >(undefined);

  // useEffect(() => {
  //   return () => {
  //     let allpreferences = getAllLocations();
  //     allpreferences
  //       .then((x) => {
  //         if (x.status === 200) {
  //           setPreferences(x.data);
  //         } else console.log(x.data);
  //       })
  //       .catch((ex) => console.log(ex.message));
  //   };
  // }, []);

  return (
    <>
      <Stack gap={3} style={{ maxHeight: "600px", overflow: "auto" }} className="p-3">
        {props.locations?.map((x) => (
          <Preference key={x.placeId} preference={x} />
        ))}
      </Stack>
    </>
  );
};

export default PreferencesTable;
