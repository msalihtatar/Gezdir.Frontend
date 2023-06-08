import exp from "constants";
import React, { useEffect } from "react";
import { Stack } from "react-bootstrap";
import { getPreferencedLocations } from "../axios/gezdirAPI";
import { PlaceDetail } from "../model/PlaceDetail";
import Preference from "./Preference";

type Props = {};

const PreferencesTable = (props: Props) => {
  const [preferences, setPreferences] = React.useState<
    PlaceDetail[] | undefined
  >(undefined);

  useEffect(() => {
    return () => {
      let allpreferences = getPreferencedLocations();
      allpreferences
        .then((x) => {
          if (x.status === 200) {
            setPreferences(x.data);
          } else console.log(x.data);
        })
        .catch((ex) => console.log(ex.message));
    };
  }, []);

  return (
    <>
      <h4>BEST PLACES FOR YOUR LOCATION</h4>

      <Stack gap={3} style={{ maxHeight: "600px", overflow: "auto" }}>
        {preferences?.map((x) => (
          <Preference key={x.placeId} preference={x} />
        ))}
      </Stack>
    </>
  );
};

export default PreferencesTable;
