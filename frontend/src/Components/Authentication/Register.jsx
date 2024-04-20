import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, createTheme, ThemeProvider, Button } from "@mui/material";
import * as Yup from "yup";

const initialValues = { fullname: "", email: "", password: "" };

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E0443", // Change primary color
    },
    text: {
      primary: "#ffffff", // Change text color to white
    },
    action: {
      hover: "rgba(255, 255, 255, 0.6)", // Change hover color with 60% opacity
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderColor: "rgba(255, 255, 255, 0.8)", // Change border color with 60% opacity
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Change hover color to white
          },
        },
      },
    },
  },
});

const Register = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full Name is required *"),
    email: Yup.string().email("Invalid email").required("Email is required *"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required *"),
  });

  const handleSubmit = (values) => {
    console.log("handle submit", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ isValid }) => (
          <Form className="space-y-10">
            <div className="space-y-10" style={{ marginTop: "6%" }}>
              <ThemeProvider theme={theme}>
                <div>
                  <Field
                    as={TextField}
                    name="fullname"
                    placeholder="Full Name *"
                    type="fullname"
                    variant="outlined"
                    fullWidth
                    inputProps={{ style: { width: "100%", color: "white" } }}
                  />
                  <ErrorMessage
                    name="fullname"
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as={TextField}
                    name="email"
                    placeholder="Email *"
                    type="email"
                    variant="outlined"
                    fullWidth
                    inputProps={{ style: { width: "100%", color: "white" } }}
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
                <div>
                  <Field
                    as={TextField}
                    name="password"
                    placeholder="Password (required 8 characters) *"
                    type="password"
                    variant="outlined"
                    fullWidth
                    inputProps={{ style: { width: "100%" } }} // Maximize the width
                  />
                  <ErrorMessage
                    name="password"
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
              </ThemeProvider>
            </div>
            <ThemeProvider theme={theme}>
              <Button
                sx={{ padding: ".8rem 0rem", fontSize: "20px" }}
                fullWidth
                type="submit"
                variant="contained"
                disabled={!isValid} // Disable button if form is not valid
              >
                signup
              </Button>
              <h4
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  textAlign: "center",
                  color: "white",
                }}>
                Already have an account?{" "}
                <b
                  style={{ color: "#1E0443" }}
                  onClick={() => {
                    window.location.href =
                      "http://localhost:3000/authentication";
                  }}>
                  Sign In
                </b>
              </h4>
            </ThemeProvider>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
