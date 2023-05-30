import * as yup from 'yup';

export const CardForm = yup
  .object()
  .shape({
    image: yup.string().required("Enter the image"),
    name: yup.string().required("Enter the name"),
    about: yup.string().required("Enter the about"),
    bedrooms: yup.number().required("Enter the bedrooms"),
    bathrooms: yup.number().required("Enter the bathrooms"),
    area: yup.number().required("Enter the area"),
    patio: yup.number().required("Enter the patio"),
    garage: yup.number().required("Enter the garage"),
    price: yup.number().required("Enter the price"),
  })
  .required();