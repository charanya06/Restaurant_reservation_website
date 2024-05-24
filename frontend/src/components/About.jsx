//import React from "react";
//import { Link } from "react-router-dom";
//import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h6 className="heading">ABOUT US<br/><br/></h6>
            </div>
            <div><p className="mid">Your Finest Coffee Served Next Door!<br/> </p></div>
            {/* <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link> */}
          </div>
          <div className="banner">
            <p className="banner1">
              The journey from bean to cup started back in early 1995. It was an
              effort to serve a truly international experience right into your
              neighborhood. Ever since we’ve grown to be a group of passionate
              people who not just want you to enjoy your coffee but have a great
              time with us. <br/> <br/>We grew to become the favorite place for coffee
              lovers of all age groups wanting to spend some quality time while
              sipping on the coffee we serve. <br/><br/>Today, we continue serving the
              best coffee in town and have built a deeper coffee relationship
              with the people of Brooklyn and around.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
