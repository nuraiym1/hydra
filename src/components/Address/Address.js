import React from "react";
import { VscLocation } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";

import { MdOutlineMail } from "react-icons/md";

const Address = () => {
  return (
    <div id="address">
      <div className="container">
        <div className="address">
          <div className="address--block">
            <div className="address--block__top1">
              <a>
                <VscLocation />
              </a>
              <div className="">
                <h1>Pay Us a Visit</h1>
                <p>Union St, Seattle, WA 98101, United States</p>
              </div>
            </div>
            <div className="address--block__top2">
              <a>
              <FiPhoneCall />
              </a>
              <div className="">
                <h1>Give Us a Call</h1>
                <p>(110) 1111-1010</p>
              </div>
            </div>
            <div className="address--block__top3">
              <a>
              <MdOutlineMail />

              </a>
              <div className="">
                <h1>Send Us a Message</h1>
                <p>Contact@HydraVTech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
