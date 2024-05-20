import React from "react";
import headerImg1 from "../../assets/img/Vector.png";
import headerImg2 from "../../assets/img/Frame.png";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--imges">
            <img src={headerImg1} alt="" />
            <img src={headerImg2} alt="" />
          </div>
          <div className="header--text">
            <a>ABOUT</a>
            <a>SERVICES</a>
            <a>TECHNOLOGIES</a>
            <a>HOW TO</a>
          </div>
         <div className="header--top">
         <div className="header--btn">
            <button>CONTACT US</button>
          </div>
          <div className="header--btn1">
            <button>JOIN HYDRA</button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
