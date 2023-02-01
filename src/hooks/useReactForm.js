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

export const questions = [
  {
    id: 1,
    label: "Patient Full Name",
    placeHolder: "Ex: mahmoud barbary",
    name: "patientName",
    type: "text",
  },
  {
    id: 2,
    label: "Dentist Email",
    placeHolder: "Ex: mahmoudbarbary@example",
    name: "dentistEmail",
    type: "text",
  },
  {
    id: 3,
    label: "Patient Feedback",
    placeHolder: "Ex: the dentist is..",
    name: "patientFeedback",
    type: "text",
  },
  {
    id: 4,
    label: "Dentist Recommendation",
    placeHolder: "Ex: we can...",
    name: "dentistRecommendation",
    type: "text",
  },
  {
    id: 5,
    label: "Dentist Name",
    placeHolder: "Ex: Dr ahmed mahmoud",
    name: "dentistName",
    type: "text",
  },
  {
    id: 6,
    label: "Treatment Cost (£)",
    placeHolder: "Ex: 50£",
    name: "treatmentCost",
    type: "text",
  },
  {
    id: 7,
    label: "Treatment Time (hours)",
    name: "treatmentTime",
    type: "select",
    options: ["1 hour", "2 hours", "3 hours", "4 hours"],
  },
  {
    id: 8,
    label:
      "Maximum number of months a patient can pay with 0% interest charged",
    placeHolder: "Ex: 1 month",
    name: "monthsWithZeroInterest",
    type: "text",
  },
  {
    id: 9,
    label: "% Discount if amount paid in full",
    placeHolder: "Ex: 20%",
    name: "discount",
    type: "text",
  },
  {
    id: 10,
    label: "Any Comments",
    placeHolder: "Ex: say whatever you want...",
    name: "comments",
    type: "textarea",
  },
];
