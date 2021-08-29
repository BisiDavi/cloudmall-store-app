import * as yup from "yup";

export const storeDetailsScreenOneSchema = yup.object().shape({
  storeName: yup.string().required("store name is required"),
  storeEmail: yup
    .string()
    .email("store email must be a valid email")
    .required("email address is required"),
  phoneNumber: yup.string().required("phone number is required"),
  storeAddress: yup.string().required("store address is required"),
  storeType: yup.string().required("store type is required"),
});

export const storeDetailsScreenTwoSchema = yup.object().shape({
  storeOwnerName: yup.string().required("store owner name is required"),
  openingDays: yup.string().required("store open days is required"),
  storeOpenTime: yup.string().required("store open time is required"),
});
