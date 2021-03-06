import { useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-mui";
import { useHistory } from "react-router-dom";

import api from "../../utils/api";
import ImgLogin from "../../images/login.png";
import useStyles from "./useStyles";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { searchInformationForLoggedInUser } from "../../store/reducers/user/actions";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, mutate } = useSWR("/users/me", {
    fallbackData: [],
    revalidateOnMount: false,
  });

  useEffect(() => {
    if (data?.success) dispatch(searchInformationForLoggedInUser(data?.user));
  }, [data, dispatch]);

  const handleSubmit = async (values) => {
    try {
      const { data } = await api.post("/account/login", {
        username: values.email,
        password: values.password,
      });

      if (data?.token && data.token !== "") {
        api.defaults.headers.Authorization = "Bearer " + data.token;
        await mutate();
        history.push("/account/person");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.imgSections}>
        <img src={ImgLogin} alt="ecommerce" />
      </Grid>
      <Grid item className={classes.formSections}>
        <Typography variant="h5">Login</Typography>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="E-mail"
                variant="standard"
                disabled={isSubmitting}
              />

              <Field
                component={TextField}
                name="password"
                type="password"
                label="Senha"
                variant="standard"
                disabled={isSubmitting}
              />

              <Grid sx={{ marginTop: "1rem" }}>
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
