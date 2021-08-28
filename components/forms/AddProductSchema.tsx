import * as yup from "yup";

const addProductSchema = yup.object().shape({
  productName: yup.string().required("Please enter a produt name"),
  productAmount: yup
    .string()
    .required("Product amount cannot be empty"),
  productSize: yup
    .string()    
    .required("Product size required"),
});

export default addProductSchema;
