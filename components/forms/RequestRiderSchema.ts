import * as yup from "yup";

const requestRiderSchema = yup.object().shape({
  personName: yup.string().required("Please enter a rider's name"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("address is required"),
  additionalDescription: yup
    .string()
    .required("additional description is required"),
});

export default requestRiderSchema;
