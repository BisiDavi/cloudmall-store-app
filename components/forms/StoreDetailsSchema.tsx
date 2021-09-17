import * as yup from "yup";

export const storeDetailsScreenOneSchema = yup.object().shape({
    name: yup.string().required("store name is required"),
    email: yup
        .string()
        .email("store email must be a valid email")
        .required("email address is required"),
    phone: yup
        .string()
        .required("phone number is required")
        .min(11, "number must be eleven digits")
        .max(11, "number must be eleven digits"),
    address: yup.string().required("store address is required"),
    state: yup.string().required("state is required"),
    category: yup.string().required("store category is required"),
    type: yup.string().required("store type is required"),
});

export const storeDetailsScreenTwoSchema = yup.object().shape({
    ownerName: yup.string().required("store owner name is required"),
    ownerPhone: yup.string().required("phone number is required"),
});

export const storeAddressSchema = yup.object().shape({
    storeAddress: yup.string().required("store address is required"),
});

export const storeSettlementDetailsSchema = yup.object().shape({
    settlementPlan: yup.string().required("settlement plan is required"),
    bankName: yup.string().required("bank name  is required"),
    accountNumber: yup
        .string()
        .required("account number is required")
        .min(10, "account number must be 10")
        .max(10, "account number must be 10"),
    accountName: yup.string().required("account name is required"),
});
