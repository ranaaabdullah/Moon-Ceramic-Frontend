import * as Yup from "yup";

export const signSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your name "),
  email: Yup.string().email().required("Email is required"),
  number: Yup.string().min(2).max(15).required("Number is required"),
  password: Yup.string().min(2).max(25).required("Password is required"),
});
