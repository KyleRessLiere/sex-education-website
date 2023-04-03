import React, { useEffect } from "react";

function Map() {
  useEffect(() => {
    new simplemaps_worldmap({
      // your SimpleMap options
      container: "map",
      height: "500",
      width: "100%",
    });
  }, []);

  return (
    <div>
      <head>
        <script src="./usmap"></script>
      </head>
      <div id="map"></div>
    </div>
  );
}

export default Map;
