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

export const storeAddressSchema = yup.object().shape({
  storeAddress: yup.string().required("store address is required"),
});

export const storeSettlementDetailsSchema = yup.object().shape({
  settlementPlan: yup.string().required("settlement plan is required"),
  bankName: yup.string().required("bank name  is required"),
  accountNumber: yup.string().required("account number field is required"),
  accountName: yup.string().required("account name is required"),
});
