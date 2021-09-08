import * as yup from "yup";

const addNewProductSchema = yup.object().shape({
  productName: yup.string().required("Please enter a produt name"),
  productAmount: yup.string().required("Product amount is required"),
  productSize: yup.string().required("Product size is required"),
});

export default addNewProductSchema;
