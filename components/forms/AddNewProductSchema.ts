import * as yup from "yup";

const addNewProductSchema = yup.object().shape({
    name: yup.string().required("Please enter a product name"),
    categoryId: yup.string().required("Product category is required"),
    description: yup.string().required("Product description is required"),
    price: yup.string().required("Product price is required"),
    quantity: yup.string().required("quantity is required"),
});

export default addNewProductSchema;
