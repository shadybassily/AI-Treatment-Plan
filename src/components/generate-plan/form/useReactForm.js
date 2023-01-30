import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useReactForm() {
  //error messages to use
  let requiredError = "This field is required";
  let minCharacters = "Minimum 3 characters"

  let maxCharacters = "Maximum 50 characters"
  let invalidEmail = "Invalid Email"

  let invalidNumber = "This field must be a number";
  let positiveIntegerNumberError = "This field must be positive integer"
  //a schema to determine the type,restrictions of the form inputs
  const schema = yup.object().shape({
    patientName: yup.string().required(requiredError).min(3,minCharacters).max(50),
    dentistEmail: yup.string().email(invalidEmail).required(requiredError),
    patientFeedback: yup.string().required(requiredError).min(3,minCharacters),
    dentistRecommendation: yup.string().required(requiredError).min(3,minCharacters),
    dentistName: yup.string().required(requiredError).min(3,minCharacters).max(50,maxCharacters),

    //using min(0) instead of positive(), because inputs can be 0, and positive() will not accept 0 as a positive number
    treatmentCost: yup.number().min(0,positiveIntegerNumberError).required(requiredError).typeError(invalidNumber),
    monthsWithZeroInterest: yup.number().min(0,positiveIntegerNumberError).integer(positiveIntegerNumberError).typeError(invalidNumber),
    discount: yup.number().required(requiredError).min(0,positiveIntegerNumberError).typeError(invalidNumber),

    comments: yup.string(),
  });

  //register: to register the name of the input ex: {...register("patientName")}
  //handleSubmit: to be passed to the onSubmit event
  //errors: returned by the yupResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, errors };
}
