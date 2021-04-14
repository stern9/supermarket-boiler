import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

const useMapboxMap = (container) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3Rlcm45IiwiYSI6ImNrbmUzanE3dTA1enYycnBlcWoxNmNjNHQifQ.HUEnMQDHZV0juMkSFbBPhw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [12.567898, 55.67583],
      zoom: 9,
    });
  }, []);
};

export default useMapboxMap;
