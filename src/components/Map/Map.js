import React, { useState } from "react";
import USAMap from "react-usa-map";
import Navbar from "../Navbar/Navbar";

function Map() {
  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    return {
      AL: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Alabama is a state located in the southeastern region of the United States, known for its historic landmarks and beautiful landscapes."
          ),
        title: "Alabama",
      },
      AK: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Alaska is a state located in the northwestern region of the United States, known for its rugged wilderness and stunning natural beauty."
          ),
        title: "Alaska",
      },
      AZ: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Arizona is a state located in the southwestern region of the United States, known for its sunny weather and stunning desert landscapes."
          ),
        title: "Arizona",
      },
      AR: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Arkansas is a state located in the southeastern region of the United States, known for its natural beauty and diverse cultural heritage."
          ),
        title: "Arkansas",
      },
      CA: {
        fill: "#7C2D3A",
        clickHandler: () =>
          setDescription(
            "California is a state located on the West Coast of the United States, known for its sunny weather, beaches, and iconic landmarks."
          ),
        title: "California",
      },
      CO: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Colorado is a state located in the western region of the United States, known for its scenic beauty and outdoor recreational activities."
          ),
        title: "Colorado",
      },
      CT: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Connecticut is a state located in the northeastern region of the United States, known for its historic landmarks and picturesque towns."
          ),
        title: "Connecticut",
      },
      DE: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Delaware is a state located in the northeastern region of the United States, known for its historic sites and beaches."
          ),
        title: "Delaware",
      },
      FL: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Florida is a state located in the southeastern region of the United States, known for its warm weather, beaches, and theme parks."
          ),
        title: "Florida",
      },
      GA: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Georgia is a state located in the southeastern region of the United States, known for its historic sites and scenic beauty."
          ),
        title: "Georgia",
      },
      HI: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Hawaii is a state located in the Pacific Ocean, known for its beautiful beaches, stunning landscapes, and unique culture."
          ),
        title: "Hawaii",
      },
      ID: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Idaho is a state located in the northwestern region of the United States, known for its natural beauty and outdoor recreational activities."
          ),
        title: "Idaho",
      },
      IL: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Illinois is a state located in the Midwestern region of the United States, known for its historic landmarks and cultural attractions."
          ),
        title: "Illinois",
      },
      IN: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Indiana is a state located in the Midwestern region of the United States, known for its historic sites and scenic beauty."
          ),
        title: "Indiana",
      },
      IA: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Iowa is a state located in the Midwestern region of the United States, known for its scenic beauty and agricultural heritage."
          ),
        title: "Iowa",
      },
      KS: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Kansas is a state located in the central region of the United States, known for its wide open spaces and unique cultural attractions."
          ),
        title: "Kansas",
      },
      KY: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Kentucky is a state located in the southeastern region of the United States, known for its horse racing and bourbon whiskey."
          ),
        title: "Kentucky",
      },
      LA: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Louisiana is a state located in the southeastern region of the United States, known for its unique culture and delicious cuisine."
          ),
        title: "Louisiana",
      },
      ME: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Maine is a state located in the northeastern region of the United States, known for its rocky coastline and fresh seafood."
          ),
        title: "Maine",
      },
      MD: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Maryland is a state located in the northeastern region of the United States, known for its historic landmarks and scenic beauty."
          ),
        title: "Maryland",
      },
      MA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Massachusetts is a state located in the northeastern region of the United States, known for its historic landmarks and cultural attractions."
          ),
        title: "Massachusetts",
      },
      MI: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Michigan is a state located in the Great Lakes region of the United States, known for its natural beauty and automotive industry."
          ),
        title: "Michigan",
      },
      MN: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Minnesota is a state located in the northwestern region of the United States, known for its natural beauty and outdoor recreational activities."
          ),
        title: "Minnesota",
      },
      MS: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Mississippi is a state located in the southeastern region of the United States, known for its historic sites and blues music."
          ),
        title: "Mississippi",
      },
      MO: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Missouri is a state located in the central region of the United States, known for its scenic beauty and unique cultural attractions."
          ),
        title: "Missouri",
      },
      MT: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Montana is a state located in the northwestern region of the United States, known for its rugged wilderness and outdoor recreational activities."
          ),
        title: "Montana",
      },
      NE: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Nebraska is a state located in the central region of the United States, known for its wide open spaces and unique cultural attractions."
          ),
        title: "Nebraska",
      },
      NV: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Nevada is a state located in the southwestern region of the United States, known for its desert landscapes and bustling cities."
          ),
        title: "Nevada",
      },
      NH: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "New Hampshire is a state located in the northeastern region of the United States, known for its quaint towns and beautiful natural landscapes."
          ),
        title: "New Hampshire",
      },
      NJ: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "New Jersey is a state located in the northeastern region of the United States, known for its beaches and boardwalks."
          ),
        title: "New Jersey",
      },
      NM: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "New Mexico is a state located in the southwestern region of the United States, known for its vibrant culture and stunning natural beauty."
          ),
        title: "New Mexico",
      },
      NY: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "New York is a state located on the East Coast of the United States, known for its iconic landmarks and bustling cities."
          ),
        title: "New York",
      },
      NC: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "North Carolina is a state located in the southeastern region of the United States, known for its beautiful beaches and mountainous landscapes."
          ),
        title: "North Carolina",
      },
      ND: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "North Dakota is a state located in the northwestern region of the United States, known for its wide open spaces and friendly people."
          ),
        title: "North Dakota",
      },
      OH: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Ohio is a state located in the Midwestern region of the United States, known for its historic sites and scenic beauty."
          ),
        title: "Ohio",
      },
      OK: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Oklahoma is a state located in the central region of the United States, known for its Native American heritage and scenic beauty."
          ),
        title: "Oklahoma",
      },
      OR: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Oregon is a state located in the northwestern region of the United States, known for its natural beauty and outdoor recreational activities."
          ),
        title: "Oregon",
      },
      PA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Pennsylvania is a state located in the northeastern region of the United States, known for its historic landmarks and beautiful countryside."
          ),
        title: "Pennsylvania",
      },
      RI: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Rhode Island is a state located in the northeastern region of the United States, known for its historic landmarks and beautiful coastline."
          ),
        title: "Rhode Island",
      },
      SC: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "South Carolina is a state located in the southeastern region of the United States, known for its historic sites and beautiful beaches."
          ),
        title: "South Carolina",
      },
      SD: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "South Dakota is a state located in the northwestern region of the United States, known for its natural beauty and historic landmarks."
          ),
        title: "South Dakota",
      },
      TN: {
        fill: "#FDB813",
        clickHandler: () =>
          setDescription(
            "Tennessee is a state located in the southeastern region of the United States, known for its music, culture, and natural beauty."
          ),
        title: "Tennessee",
      },
      TX: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Texas is a state located in the southern region of the United States, known for its cowboy culture, oil industry, and delicious barbecue."
          ),
        title: "Texas",
      },
      UT: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "Utah is a state located in the western region of the United States, known for its stunning natural beauty and outdoor recreational activities."
          ),
        title: "Utah",
      },
      VT: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Vermont is a state located in the northeastern region of the United States, known for its beautiful countryside and delicious maple syrup."
          ),
        title: "Vermont",
      },
      VA: {
        fill: "#BE1E2D",
        clickHandler: () =>
          setDescription(
            "Virginia is a state located in the southeastern region of the United States, known for its historic landmarks and beautiful beaches."
          ),
        title: "Virginia",
      },
      WA: {
        fill: "#0072C6",
        clickHandler: () =>
          setDescription(
            "Washington is a state located in the northwestern region of the United States, known for its natural beauty and bustling cities."
          ),
        title: "Washington",
      },
      WV: {
        fill: "#9FC5E8",
        clickHandler: () =>
          setDescription(
            "West Virginia is a state located in the northeastern region of the United States, known for its scenic beauty and outdoor recreational activities."
          ),
        title: "West Virginia",
      },
      WI: {
        fill: "#A1C935",
        clickHandler: () =>
          setDescription(
            "Wisconsin is a state located in the Midwestern region of the United States, known for its natural beauty and cheese production."
          ),
        title: "Wisconsin",
      },
      WY: {
        fill: "#EE7F2D",
        clickHandler: () =>
          setDescription(
            "Wyoming is a state located in the western region of the United States, known for its rugged wilderness and outdoor recreational activities."
          ),
        title: "Wyoming",
      },
    };
  };

  const [description, setDescription] = useState("");

  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <div>
      <Navbar />
      <div
        className="map"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <USAMap onClick={mapHandler} customize={statesCustomConfig()} />
      </div>
      <div className="description">{description && <p>{description}</p>}</div>
    </div>
  );
}

export default Map;
