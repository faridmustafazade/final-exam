import React, { useEffect, useState } from "react";
import "./style.scss";
import { Input } from "antd";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sorting, setSorting] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get("http://localhost:1000/cards");
    setData(res.data);
  };
  const deleteData = async (id) => {
    await axios.delete(`http://localhost:1000/cards/${id}`);
    await getData();
  };
  useEffect(() => {
    getData();
  }, []);

  const search = (e) => {
    setValue(e.target.value);
  };

  const Sorting = () => {
    let res = [];

    if (sorting === true) {
      setSorting(false);
      res = [...data].sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      setSorting(true);
      res = [...data].sort((a, b) => {
        return b.price - a.price;
      });
    }
    setData(res);
  };
  return (
    <>
      <div className="full-feature">
        <div className="container">
          <div className="feature">
            <div className="side-up">
              <div className="line"></div>
              <p className="fea-p">FEATURED PROPERTIES</p>
              <p className="see-p">See our best offers</p>
            </div>
            <div className="buttons">
              <Input onChange={search} placeholder="Search By Name" />
              <Button onClick={Sorting} type="primary">
                Sort By Price
              </Button>
            </div>

            <div className="side-down">
              {data
                .filter((item) =>
                  item.name.toLowerCase().includes(value.toLowerCase())
                )
                .map((d) => (
                  <div className="feas">
                    <div className="fea-card">
                      <div className="fea-img1">
                        <img width={360} src={d.image} alt="" />
                        <p className="feaa">FEATURED</p>
                      </div>
                      <p className="name">{d.name}</p>
                      <p className="about">{d.about}</p>
                      <div className="count">
                        <div className="icon1">
                          <p>Bedrooms</p>
                          <div className="icons1">
                            <img
                              src="https://preview.colorlib.com/theme/theestate/images/bedroom.png"
                              alt=""
                            />
                            <p>{d.bedrooms}</p>
                          </div>
                        </div>
                        <div className="icon1">
                          <p>Bathrooms</p>
                          <div className="icons1">
                            <img
                              src="https://preview.colorlib.com/theme/theestate/images/shower.png"
                              alt=""
                            />
                            <p>{d.bathrooms}</p>
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
                              {d.area} <span>Sq Ft</span>
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
                            <p>{d.patio}</p>
                          </div>
                        </div>
                        <div className="icon1">
                          <p>Garage</p>
                          <div className="icons1">
                            <img
                              src="https://preview.colorlib.com/theme/theestate/images/garage.png"
                              alt=""
                            />
                            <p>{d.garage}</p>
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
                        <p className="price">${d.price},000</p>
                      </div>
                    </div>
                    <div className="buttons2">
                    <Button onClick={() => deleteData(d._id)} type="primary">
                      Delete
                    </Button>
                    <Button onClick={() => navigate(d._id)} type="primary">
                      Details
                    </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
