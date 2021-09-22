import * as yup from "yup";

const addNewProductSchema = yup.object().shape({
    productName: yup.string().required("Please enter a product name"),
    productCategory: yup.string().required("Product category is required"),
    productDescription: yup
        .string()
        .required("Product description is required"),
    productPrice: yup.string().required("Product price is required"),
    quantity: yup.string().required("quantity is required"),
});

export default addNewProductSchema;
