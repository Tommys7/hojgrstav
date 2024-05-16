import { useFormik } from "formik";
import { useState } from "react";

const FormInput = function ({ formik, name, label }) {
  return (
    <div className="w-100">
      <label className="w-100 form-label" htmlFor="name">
        {label}
      </label>
      <input
        className="w-100 form-input"
        type="text"
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
      />
      {formatFormikError(formik, name)}
    </div>
  );
};

const formatFormikError = (formik, name) => {
  if (!formik.touched[name]) {
    return null;
  }

  if (!formik.errors[name]) {
    return null;
  }

  return (
    <p className="text-red-500 text-xs italic absolute">
      {formik.errors[name]?.toString()}
    </p>
  );
};

const validateContact = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Povinné";
  }

  if (!values.lastname) {
    errors.lastname = "Povinné";
  }

  if (!values.email) {
    errors.email = "Povinné";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(values.email)) {
    errors.email = "Neplatný formát e-mailové adresy";
  }

  return errors;
};

const Form = () => {
  const [isSent, setIsSent] = useState();
  const [isError, setIsError] = useState();

  const formik = useFormik({
    validate: validateContact,
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      inq: "",
    },
    onSubmit: async (values) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstname,
          lastName: values.lastname,
          email: values.email,
          phone: values.phone,
          inq: values.inq,
        }),
      });

      if (!response.ok) {
        setIsError(true);
        setIsSent(false);
        return;
      }

      if (response.ok) {
        setIsSent(true);
        setIsError(false);
        return;
      }

      const responseData = await response.json();
    },
  });
  return (
    <div id="Poptavka" className="container pb-10 form-overlay-point">
      {isSent ? (
        <div className="form-overlay">
          <p className="z-10 !color-black relative flex w-100 h-full justify-center items-center text-2xl md:text-3xl succes-msg text-center p-10 flex-col">
            Děkuji za odeslání poptávky!
            <p className="text-black text-sm mt-4">
              &nbsp;Co nejdříve Vás budu kontaktovat.
            </p>
          </p>
        </div>
      ) : (
        ""
      )}
      {isError ? (
        <div className="form-overlay">
          <p className="z-10 !color-black relative flex w-100 h-full justify-center items-center text-2xl md:text-3xl error-msg text-center p-10 flex-col">
            Odeslání formuláře se nezdařilo.
            <p className="text-black text-sm mt-4">
              &nbsp;Kontaktujte mě prosím telefonicky.
            </p>
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="form-container">
        <h2 className="section-title !mb-10">Poptávka</h2>
        <form noValidate onSubmit={formik.handleSubmit}>
          <div className="d-grid">
            <FormInput
              label="Křestní jméno*"
              formik={formik}
              name="firstname"
            />
            <FormInput label="Příjmení*" formik={formik} name="lastname" />
            <FormInput label="Telefonní číslo" formik={formik} name="phone" />
            <FormInput label="E-mail*" formik={formik} name="email" />
          </div>
          <div className="w-100 form-textarea">
            <label className="w-100 form-label" htmlFor="name">
              Poptávka
            </label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values["inq"]}
              onBlur={formik.handleBlur}
              name="inq"
              rows={5}
              className="w-100 form-input"
              type="text"
            />
            {isError ? (
              <p className="text-red-500">Odeslání formuláře se nezdařilo.</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <button type="submit" className="hero-btn">
              Odeslat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
