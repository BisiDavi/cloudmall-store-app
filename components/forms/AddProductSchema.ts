import * as yup from "yup";

const addProductSchema = yup.object().shape({
  productName: yup.string().required("Please enter a produt name"),
  productCategory: yup.string().required("Product category  cannot be empty"),
  productDescription: yup.string().required("Product description is required"),
  productPrice: yup.string().required("Product price is required"),
  quantity: yup.number().required("quantity is required"),
});

export default addProductSchema;
