import PropTypes from "prop-types";
import api from "../../utils/api";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

import useStyles from "./useStyles";

const intialValuesProduct = {
  name: "",
  price: "",
};

FormRegisterProducts.propTypes = {
  product: PropTypes.object,
  callback: PropTypes.func,
};

export default function FormRegisterProducts({
  product = intialValuesProduct,
  callback,
  handleCloseModal,
}) {
  const classes = useStyles();

  async function handleSubmit(values) {
    try {
      await api.post("/products", values);
      callback(true, values);
      handleCloseModal();
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <Formik initialValues={product} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form id="form-cadastro-produto" className={classes.form}>
          <Field
            component={TextField}
            name="name"
            label="Nome"
            variant="standard"
            className={classes.input}
            disabled={isSubmitting}
          />

          <Field
            component={TextField}
            name="price"
            label="Preço"
            variant="standard"
            className={classes.input}
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}
