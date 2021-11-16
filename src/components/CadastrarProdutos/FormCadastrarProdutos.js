import PropTypes from "prop-types";
import api from "../../utils/api";
import { Formik, Form, Field } from "formik";
import { TextField } from "@material-ui/core";

import useStyles from "./useStyles";

const intialValuesProduct = {
  name: "",
  price: "",
};

FormCadastrarProdutos.propTypes = {
  product: PropTypes.object,
  callback: PropTypes.func,
};

export default function FormCadastrarProdutos({
  product = intialValuesProduct,
  callback,
}) {
  const classes = useStyles();

  async function handleSubmit(values) {
    try {
      await api.post("/products", values);
      callback(true);
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <Formik initialValues={product} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form id="form-cadastro-produto" className={classes.form}>
          <Field
            name="name"
            render={({ field }) => (
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
            render={({ field }) => (
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
