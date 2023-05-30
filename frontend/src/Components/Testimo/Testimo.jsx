import React from "react";
import "./style.scss";


const Testimo = () => {
  return (
    <>
      <div className="full-test">
        <div className="container">
          <div className="test">
            <div className="test-up">
              <div className="line"></div>
              <p className="cli-p">CLIENTS TESTIMONIALS</p>
              <p className="our-p">See our best offers</p>
            </div>
            <div className="test-down">
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem sed quibusdam delectus et reprehenderit modi
                itaque rem laudantium harum ex doloribus, dolorem maxime libero,
                eaque beatae eligendi fuga ipsam tempore.
              </p>
              <div className="test-img">
                <img
                  src="https://preview.colorlib.com/theme/theestate/images/person.jpg"
                  alt=""
                />
              <p className="natalie">Natalie Smith</p>
              <p className="client">Client in California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimo;
