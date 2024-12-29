"use client";
import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

// Validation
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function ContactForm() {

  const handleSubmit = async (    
    values: FormValues, { setSubmitting,resetForm,}: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }) => {
      console.log(values);
    try {
    const formattedValues = {
      FirstName: values.firstName,
      LastName: values.lastName,
      Phone: values.phone,
      Email: values.email,
    };
      const response = await axios.post("http://localhost:1337/user-informations", formattedValues);
      if (response.status === 200) {
        alert("Form submitted successfully!");
        console.log(response);
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-sec overflow-x-auto rounded w-full md:w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="p-3">
            <div className="flex flex-wrap -mx-2">
              {/* First Name */}
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm px-4 py-2"
                  placeholder="Enter First Name"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* Last Name */}
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm px-4 py-2"
                  placeholder="Enter Last Name"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm px-4 py-2"
                placeholder="Enter Phone Number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm px-4 py-2"
                placeholder="Enter Email Address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-1/2 mx-auto bg-bermuda text-white font-medium rounded shadow py-2 px-4 
                  ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-tahiti"
                  } 
                  focus:ring-2 focus:ring-bermuda-500 focus:outline-none`}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
