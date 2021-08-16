import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email Address is required"),
  password: yup.string().required("Password is required"),
});

export default loginSchema;
