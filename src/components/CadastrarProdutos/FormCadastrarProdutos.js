import PropTypes from "prop-types";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { TextField } from "@material-ui/core";

import useStyles from "./useStyles";

const intialValuesProduct = {
  name: "",
  price: "",
};

FormCadastrarProdutos.propTypes = {
  product: PropTypes.object,
  innerRef: PropTypes.object,
};

export default function FormCadastrarProdutos({
  product = intialValuesProduct,
  innerRef = null,
}) {
  const classes = useStyles();

  function handleSubmit({ values }) {
    axios.post("/products", values);
  }

  return (
    <Formik initialValues={product} onSubmit={handleSubmit} ref={innerRef}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={classes.form}>
          <Field
            name="name"
            render={({ field, form: { isSubmitting } }) => (
              <TextField
                {...field}
                label="Nome"
                variant="standard"
                className={classes.input}
                disabled={isSubmitting}
              />
            )}
          />

          <Field
            name="price"
            render={({ field, form: { isSubmitting } }) => (
              <TextField
                {...field}
                label="Preço"
                variant="standard"
                className={classes.input}
                disabled={isSubmitting}
              />
            )}
          />
        </Form>
      )}
    </Formik>
  );
}
