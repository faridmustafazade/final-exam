import React from "react";
import "./style.scss";

const Cities = () => {
  return (
    <>
      <div className="full-city">
        <div className="container">
          <div className="city">
            <div className="city-up">
              <div className="line"></div>
              <p className="fea-p">CITIES CLIENTS PREFER</p>
              <p className="see-p">What you need to do</p>
            </div>
            <div className="side-down">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/theestate/images/city_1.jpg"
                  alt=""
                />
                <p className="pos">MIAMI</p>
              </div>
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/theestate/images/city_2.jpg"
                  alt=""
                />
                <p className="pos">DUBLIN</p>
              </div>
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/theestate/images/city_3.jpg"
                  alt=""
                />
                <p className="pos">VIENNA</p>
              </div>
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/theestate/images/city_4.jpg"
                  alt=""
                />
                <p className="pos">MARBELLA</p>
              </div>
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/theestate/images/city_5.jpg"
                  alt=""
                />
                <p className="pos">NEW YORK</p>
              </div>
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/theestate/images/city_6.jpg"
                  alt=""
                />
                <p className="pos">GENEVA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cities;
