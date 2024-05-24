//import React from 'react'
import { data } from "../restApi.json";

const WhoAreWe = () => {
  return (
    <>
      <section className="who_are_we" id="who_are_we">
        <div className="container">
          <div className="text_banner">
            {data[0].who_we_are.slice(0, 2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
          <div className="image_banner">
            <img className="gradient_bg" src="center.svg" alt="gradientBg" />
            <img
              src="https://i.pinimg.com/originals/9f/e6/04/9fe604d7ee836e92dda83e8af1030357.jpg"
              alt="food"
              style={{
                width: "600px", // Set equal width and height, adjust as needed
                height: "600px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="text_banner">
            {data[0].who_we_are.slice(2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
