import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import { CardContent, Avatar } from "@mui/material";

import useStyles from "./useStyles";
import { TextField } from "formik-mui";

const initialValuesPerson = {
  name: "",
  username: "",
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
      {(values, isSubmitting) => (
        <Form>
          <CardContent className={classes.form}>
            <Avatar
              className={classes.avatar}
              src={values.img}
              alt={values.name}
            />
            <Field
              component={TextField}
              name="name"
              label="Nome"
              variant="standard"
              className={classes.input}
              disabled={!isEdit || isSubmitting}
            />
            <Field
              component={TextField}
              name="username"
              type="email"
              label="Email"
              variant="standard"
              className={classes.input}
              disabled={!isEdit || isSubmitting}
            />
            <Field
              component={TextField}
              name="phone"
              label="Telefone"
              variant="standard"
              className={classes.input}
              disabled={!isEdit || isSubmitting}
            />
          </CardContent>
        </Form>
      )}
    </Formik>
  );
}
