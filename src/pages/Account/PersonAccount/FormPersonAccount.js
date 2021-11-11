import { Field, Form, Formik } from "formik";
import { CardContent, Avatar } from "@material-ui/core";

import useStyles from "./useStyles";
import { TextField } from "@material-ui/core";

const initialValuesPerson = {
  name: "",
  email: "",
  phone: "",
  img: "",
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
