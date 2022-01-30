import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import { CardContent, Avatar } from "@mui/material";

import useStyles from "./useStyles";
import { TextField } from "@mui/material";

const initialValuesPerson = {
  name: "",
  email: "",
  phone: "",
  img: "",
};

FormPersonAccount.propTypes = {
  user: PropTypes.object,
  isEdit: PropTypes.bool,
};

export default function FormPersonAccount({
  user = initialValuesPerson,
  isEdit = true,
}) {
  const classes = useStyles();

  function handleSubmit(event) {
    console.log("teste");
  }

  return (
    <Formik initialValues={user} onSubmit={handleSubmit}>
      {(values, handleSubmit) => (
        <Form onSubmit={handleSubmit}>
          <CardContent className={classes.form}>
            <Avatar
              className={classes.avatar}
              src={values.img}
              alt={values.name}
            />
            <Field
              name="name"
              render={({ field, form: { isSubmitting } }) => (
                <TextField
                  {...field}
                  label="Nome"
                  variant="standard"
                  className={classes.input}
                  disabled={!isEdit || isSubmitting}
                />
              )}
            />
            <Field
              name="email"
              render={({ field, form: { isSubmitting } }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  variant="standard"
                  className={classes.input}
                  disabled={!isEdit || isSubmitting}
                />
              )}
            />
            <Field
              name="phone"
              render={({ field, form: { isSubmitting } }) => (
                <TextField
                  {...field}
                  label="Telefone"
                  variant="standard"
                  className={classes.input}
                  disabled={!isEdit || isSubmitting}
                />
              )}
            />
          </CardContent>
        </Form>
      )}
    </Formik>
  );
}
