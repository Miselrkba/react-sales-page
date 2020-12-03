import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.values.firstName || !formik.values.lastName) {
      return;
    }
    formik.handleSubmit();
    formik.resetForm();
  };

  return (
    <section className="form-style">
      <div className='back-button'>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      </div>
      <div className="form-header-container">
        <h1>Sign up!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <div className="input-container">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
        </div>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <div className="input-container">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
