import { useState, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

const Location = () => {
  const [marker, setMarker] = useState();

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3Rlcm45IiwiYSI6ImNrbmUzanE3dTA1enYycnBlcWoxNmNjNHQifQ.HUEnMQDHZV0juMkSFbBPhw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // matches <div id="map" />
      style: "mapbox://styles/mapbox/dark-v10", // sets the dark mode
      center: [-84.11129038, 9.93691428], // Sets the center of the map (long, lat)
      zoom: 9,
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([-84.11129038, 9.93691428])
      .addTo(map);

    setMarker(marker);
  }, []);

  const stores = {
    sanJose: [-84.11129038, 9.93691428],
    escazu: [-84.12775103, 9.93289738],
    heredia: [-84.12844045, 9.99920793],
  };

  const handleStoreChange = (e) => {
    const location = e.target.value;
    marker.setLngLat(stores[location]);
  };

  return (
    <>
      <div className="map-overlay">
        <h3>Choose store: </h3>
        <select onChange={handleStoreChange}>
          <option value="sanJose">San Jose</option>
          <option value="escazu">Escazu</option>
          <option value="heredia">Heredia</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
};

export default Location;
