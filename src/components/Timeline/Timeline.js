import React from "react";

function Timeline() {
  return (
    <div>
      <section id="timeline">
        <h1>A Flexbox Timeline</h1>
        <p className="leader">
          All cards must be the same height and width for space calculations on
          large screens.
        </p>
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1">
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Technology
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step2">
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Confidence
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step3">
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Adaptation
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step4">
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Consistency
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step5">
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Conversion
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
