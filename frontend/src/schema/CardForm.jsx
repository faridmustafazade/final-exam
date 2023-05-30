import * as yup from 'yup';

export const CardForm = yup
  .object()
  .shape({
    image: yup.string().required("Enter the image"),
    name: yup.string().required("Enter the name"),
    about: yup.string().required("Enter the about"),
    bedrooms: yup.string().required("Enter the bedrooms"),
    bathrooms: yup.string().required("Enter the bathrooms"),
    area: yup.string().required("Enter the area"),
    patio: yup.string().required("Enter the patio"),
    garage: yup.string().required("Enter the garage"),
    price: yup.string().required("Enter the price"),
  })
  .required();