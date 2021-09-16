import * as yup from "yup";

const addExtraSchema = yup.object().shape({
    extraName: yup.string().required("Please enter an extra product name"),
    productPrice: yup.string().required("Product Price is required"),
});

export default addExtraSchema;
