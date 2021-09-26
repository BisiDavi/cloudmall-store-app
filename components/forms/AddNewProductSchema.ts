import * as yup from "yup";

const addNewProductSchema = yup.object().shape({
    name: yup.string().required("Please enter a product name"),
    categoryId: yup.string().required("Product category is required"),
    description: yup.string().required("Product description is required"),
    price: yup.number().positive().required("Product price is required"),
    takeawayPrice: yup
        .number()
        .positive()
        .moreThan(50)
        .notRequired()
        .label("takeaway price"),
    quantity: yup.number().positive().required("quantity is required"),
});

export default addNewProductSchema;
