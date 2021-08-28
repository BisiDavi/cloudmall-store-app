import * as yup from "yup";

export const storeDetailsScreenOneSchema = yup.object().shape({
  storeName: yup.string().required("store name is required"),
  storeEmail: yup
    .string()
    .email("store email must be a valid email")
    .required("email address is required"),
  phoneNumber: yup.string().required("phone number is required"),
  storeAddress: yup.string().required("store address is required"),
});

export const storeDetailsScreenTwoSchema = yup.object().shape({
  openingDays: yup.string().required("sopen days field is required"),
  phoneNumber: yup.string().required("phone number is required"),
});
