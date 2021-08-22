import * as yup from "yup";

export const storeDetailsSchema = yup.object().shape({
  name: yup.string().required("store name is required"),
  storeEmail: yup
    .string()
    .email("store email must be a valid email")
    .required("email address is required"),
  phoneNumber: yup.string().required("phone number is required"),
  address: yup.string().required("store address is required"),
});