import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import { Helmet } from "react-helmet";

const Detail = () => {
  const [data, setData] = useState("");
  const params = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:1000/cards/${params.id}`);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="full-detail">
        <div className="feas">
          <div className="fea-card">
            <div className="fea-img1">
              <img width={360} src={data.image} alt="" />
              <p className="feaa">FEATURED</p>
            </div>
            <p className="name">{data.name}</p>
            <p className="about">{data.about}</p>
            <div className="count">
              <div className="icon1">
                <p>Bedrooms</p>
                <div className="icons1">
                  <img
                    src="https://preview.colorlib.com/theme/theestate/images/bedroom.png"
                    alt=""
                  />
                  <p>{data.bedrooms}</p>
                </div>
              </div>
              <div className="icon1">
                <p>Bathrooms</p>
                <div className="icons1">
                  <img
                    src="https://preview.colorlib.com/theme/theestate/images/shower.png"
                    alt=""
                  />
                  <p>{data.bathrooms}</p>
                </div>
              </div>
              <div className="icon1">
                <p>Area</p>
                <div className="icons1">
                  <img
                    src="https://preview.colorlib.com/theme/theestate/images/area.png"
                    alt=""
                  />
                  <p>
                    {data.area} <span>Sq Ft</span>
                  </p>
                </div>
              </div>
              <div className="icon1">
                <p>Patio</p>
                <div className="icons1">
                  <img
                    src="https://preview.colorlib.com/theme/theestate/images/patio.png"
                    alt=""
                  />
                  <p>{data.patio}</p>
                </div>
              </div>
              <div className="icon1">
                <p>Garage</p>
                <div className="icons1">
                  <img
                    src="https://preview.colorlib.com/theme/theestate/images/garage.png"
                    alt=""
                  />
                  <p>{data.garage}</p>
                </div>
              </div>
            </div>
            <div className="tags">
              <p>Hottub</p>
              <p>Swimming Pool</p>
              <p>Garden</p>
              <p>Patio</p>
              <p>Hard Wood Floor</p>
            </div>
          </div>
          <div className="card-footer">
            <img
              src="https://preview.colorlib.com/theme/theestate/images/tag.svg"
              alt=""
            />
            <div className="foot-texts">
              <p className="for">For Sale</p>
              <p className="price">${data.price},000</p>
            </div>
          </div>
          <Button type="primary">
            <Link to="/">Go Back</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Detail;
