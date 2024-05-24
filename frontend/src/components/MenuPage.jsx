//import Navbar from "./Navbar";
import Footer from "./Footer";
import { data } from "../restApi.json";
import { Link} from "react-router-dom";
const MenuPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <nav>
          <div className="logo">BEAN AND BREW</div>
          <div className="links">
          <Link to={"/"} style={{fontSize:30}}>
            Home 
          </Link>
          </div>
        </nav>
      </div>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading" style={{ fontSize: 60 }}>
              Menu
              <br />
            </h1>
            <p>
              It isn’t just coffee. We serve a variety of refreshments, snacks
              and delicacies to satisfy your taste buds <br /> and make sure you
              get the best experience with us.
              <br />
              <br />
            </p>
            <h1 className="heading" style={{ fontSize: 40 }}>
              Beverages
              <br />
            </h1>
          </div>
          <div className="dishes_container">
            {data[0].menu_beverages.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                {/* <button>{element.category}</button> */}
              </div>
            ))}
          </div>
          <h1 className="heading" style={{ fontSize: 40 }}>
            Iced Teas and Lemonades
          </h1>
          <div className="dishes_container">
            {data[0].menu_iced.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                {/* <button>{element.category}</button> */}
              </div>
            ))}
          </div>
          <h1 className="heading" style={{ fontSize: 40 }}>
            Desserts
          </h1>
          <div className="dishes_container">
            {data[0].menu_desserts.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                {/* <button>{element.category}</button> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      </>
  );
};

export default MenuPage;
