import React from "react";
function Timeline() {
  const timelineData = [
    {
      id: 1,
      title: "Title",
      date: "1 MAY 2016",
      description: "1",
    },
    {
      id: 2,
      title: "Card Title",
      date: "25 MAY 2016",
      description: "2",
      isCard: true,
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!",
      date: "3 JUN 2016",
    },
    {
      id: 4,
      title: "Title",
      date: "22 JUN 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
    },
    {
      id: 5,
      title: "Card Title",
      date: "10 JULY 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepeatque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
      isCard: true,
    },
    {
      id: 6,
      title: "Card Title",
      date: "30 JULY 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
      isCard: true,
    },
    {
      id: 7,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!",
      date: "5 AUG 2016",
    },
    {
      id: 8,
      title: "Card Title",
      date: "19 AUG 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.",
      isCard: true,
    },
  ];
  return (
    <>
      <header>
        <div className="container text-center">
          <h1>Sex Timeline</h1>
        </div>
      </header>
      <section className="timeline">
        <div className="container">
          {timelineData.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-img"></div>
              <div
                className={`timeline-content ${
                  item.isCard
                    ? "timeline-card js--fadeInRight"
                    : "js--fadeInLeft"
                }`}
              >
                {item.title && <h2>{item.title}</h2>}
                {item.date && <div className="date">{item.date}</div>}
                {item.description && <p>{item.id}</p>}
                {item.quote && <blockquote>{item.quote}</blockquote>}
                <a className="bnt-more" href="javascript:void(0)">
                  More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Timeline;
