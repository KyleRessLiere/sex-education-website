import React from "react";

function Timeline() {
  const data = [
    {
      id: 1,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    {
      id: 2,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    {
      id: 3,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    {
      id: 4,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    {
      id: 5,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    {
      id: 6,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    {
      id: 7,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    {
      id: 8,
      subtitle: "Subtitle",
      title: "Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.",
      imgUrl: "http://placehold.it/1000x500",
      color: "#46b8e9",
    },
    // ... Add more objects for each card
  ];

  return (
    <div>
      <section id="timeline">
        <h1>A Flexbox Timeline</h1>
        <p className="leader">
          All cards must be the same height and width for space calculations on
          large screens.
        </p>
        <div className="demo-card-wrapper">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`demo-card demo-card--step${item.id}`}
              style={{
                order: index + 1,
                backgroundColor: item.color,
              }}
            >
              <div className="head">
                <div className="number-box">
                  <span>{item.id.toString().padStart(2, "0")}</span>
                </div>
                <h2>
                  <span className="small">{item.subtitle}</span> {item.title}
                </h2>
              </div>
              <div className="body">
                <p>{item.description}</p>
                <img src={item.imgUrl} alt="Graphic" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Timeline;
