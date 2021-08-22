import * as yup from "yup";

export const storeDetailsSchema = yup.object().shape({
  name: yup.string().required("Store name required"),
  storeEmail: yup.string().email().required("Email Address is required"),
  phoneNumber: yup.string().required("phone number is required"),
  address: yup.string().required("store address is required"),
});
