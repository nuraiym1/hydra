import React from "react";
import home1 from "../../assets/img/home1.png";
import { FaArrowRight } from "react-icons/fa6";


const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
        
          <div className="home--text">
            <h1>
              <span>Dive</span> Into The Depths <br /> <span>Of</span> Virtual
              Reality
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.<br/>
              Lectus mauris eros in vitae .
            </p>
            <div className="home--btn">
              <button>BUILD YOUR WORLD</button>
              <a><FaArrowRight /></a>
            </div>
          </div>
          <img src={home1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
