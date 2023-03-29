import Homepage from "../components/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatWeDo from "../components/Homepage/WhatWeDo";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>;
export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}
