import * as yup from "yup";

const addExtraSchema = yup.object().shape({
    name: yup.string().required("please enter an extra product name"),
    price: yup.string().required("product price is required"),
});

export default addExtraSchema;
