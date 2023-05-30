import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardForm } from "../../../schema/CardForm";
import axios from "axios";
import { Helmet } from "react-helmet";

const AddCard = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CardForm),
  });

  const post = () => {
    const values = getValues();
    axios.post("http://localhost:1000/cards", {
      image: values.image,
      name: values.name,
      about: values.about,
      bedrooms: values.bedrooms,
      bathrooms: values.bathrooms,
      area: values.area,
      patio: values.patio,
      garage: values.garage,
      price: values.price,
    });
  };
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Add-Card</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <form className="form" onSubmit={handleSubmit(post)}>
        <div>
          <label htmlFor="">Enter Image</label><br></br>
          <input placeholder="Enter Image" {...register("image")} />
          {errors.image?.message && <p>{errors.image?.message}</p>}
        </div>

        <div>
          <label htmlFor="">Enter Name</label><br></br>
          <input placeholder="Enter Name" {...register("name")} />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Enter About</label><br></br>
          <input placeholder="Enter About" {...register("about")} />
          {errors.about?.message && <p>{errors.about?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Enter Bedrooms</label><br></br>
          <input placeholder="Enter Bedrooms" type="number" {...register("bedrooms")} />
          {errors.bedrooms?.message && <p>{errors.bedrooms?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Enter Bathrooms</label><br></br>
          <input placeholder="Enter Bathrooms" type="number" {...register("bathrooms")} />
          {errors.bathrooms?.message && <p>{errors.bathrooms?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Enter Area</label><br></br>
          <input placeholder="Enter Area" type="number" {...register("area")} />
          {errors.area?.message && <p>{errors.area?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Enter Patio</label><br></br>
          <input placeholder="Enter Patio" type="number" {...register("patio")} />
          {errors.patio?.message && <p>{errors.patio?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Enter Garage</label><br></br>
          <input placeholder="Enter Garage" type="number" {...register("garage")} />
          {errors.garage?.message && <p>{errors.garage?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Enter Price</label><br></br>
          <input placeholder="Enter Price" type="number" {...register("price")} />
          {errors.price?.message && <p>{errors.price?.message}</p>}
        </div>
        <input className="btn" type="submit" />
      </form>
    </>
  );
};

export default AddCard;
