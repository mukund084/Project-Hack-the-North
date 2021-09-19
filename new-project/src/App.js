import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
//import withGoogleMap from "react-google-maps/lib/withGoogleMap";
//import withScriptjs from "react-google-maps/lib/withScriptjs";

let admins = require("./data/Polygon.json");
/*
function Map() {
  return (
    <GoogleMap
      onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
      defaultZoom={12}
      defaultCenter={{ lat: 43.684021, lng: -79.759048 }}
    />
  );
}
*/
//const WrappingMap = withScriptjs(withGoogleMap(Map));

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);

    setHeight(window.innerHeight);
  };
  console.log(admins);
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);

    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  // zoom of the web application when you open it
  document.body.style.zoom = "80%";
  //console.log(admins);
  return (
    <div
      style={{
        marginBottom: "100px",
        marginTop: "100px",
        marginLeft: "150px",
        width: "80vw",
        height: "80vh",
      }}
    >
      <GoogleMap
        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
        defaultZoom={12}
        defaultCenter={{ lat: 43.684021, lng: -79.759048 }}
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyD0LW50_GtYuB0nlw5-YhW5i1uBCGNe3XA&v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default App;
