import { useState, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

const Location = () => {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3Rlcm45IiwiYSI6ImNrbmUzanE3dTA1enYycnBlcWoxNmNjNHQifQ.HUEnMQDHZV0juMkSFbBPhw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // matches <div id="map" />
      style: "mapbox://styles/mapbox/dark-v10", // sets the dark mode
      center: [-84.087502, 9.934739], // Sets the center of the map (long, lat)
      zoom: 9,
    });
  }, []);

  return (
    <>
      <h1>Our Store Location</h1>
      <button id="re-render" onClick={() => setRandom(Math.random())}>
        Re-render
      </button>
      <div id="map"></div>
    </>
  );
};

export default Location;
