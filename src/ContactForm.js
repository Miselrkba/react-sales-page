import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
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
    <section className="contact-form-style">
      <div className="back-button">
        <Link to="/">
          <button className="btn">Back</button>
        </Link>
      </div>
      <div className="form-header-container">
        <h1>Contact us</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={formik.errors.name ? "error" : null}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        {formik.errors.name ? (
          <span className="errorText">{formik.errors.name}</span>
        ) : null}
        <div className="input-container">
          <input
            type="text"
            name="email"
            placeholder="Your email"
            className={formik.errors.email ? "error" : null}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email ? (
          <span className="errorText">{formik.errors.email}</span>
        ) : null}
        <div className="input-container">
          <textarea
            name="message"
            placeholder="Your message"
            className={formik.errors.message ? "error" : null}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>
        {formik.errors.message ? (
          <span className="errorText">{formik.errors.message}</span>
        ) : null}
        <div className="button-container">
          <button type="submit">Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
