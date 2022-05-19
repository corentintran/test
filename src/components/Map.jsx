import React from "react";
import { Map, Marker } from "pigeon-maps";

export default function MyMap(props) {
  const lat = parseFloat(props.latitude);
  const long = parseFloat(props.longitude);

  return (
    <Map height={300} defaultCenter={[40, 18]} defaultZoom={1}>
      <Marker width={50} anchor={[lat, long]} />
    </Map>
  );
}
