import { Button, Grid, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-mui";

import ImgLogin from "../../images/login.png";
import useStyles from "./useStyles";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.imgSections}>
        <img src={ImgLogin} alt="ecommerce" />
      </Grid>
      <Grid item className={classes.formSections}>
        <Typography>Login</Typography>

        <Formik initialValues={initialValues}>
          {() => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="E-mail"
                variant="standard"
              />

              <Field
                component={TextField}
                name="password"
                type="password"
                label="Senha"
                variant="standard"
              />

              <Grid sx={{ marginTop: "1rem" }}>
                <Button variant="text">Cancelar</Button>
                <Button variant="text" type="submit">
                  Entrar
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
