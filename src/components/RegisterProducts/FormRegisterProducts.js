import PropTypes from "prop-types";
import api from "../../utils/api";
import { Formik, Form, Field } from "formik";
import { TextField } from "@mui/material";

import useStyles from "./useStyles";

const intialValuesProduct = {
  name: "",
  price: "",
};

FormRegisterProducts.propTypes = {
  product: PropTypes.object,
  // TODO: Se callback é obrigatório, definir na propType
  callback: PropTypes.func,
};

/**
 * loading
 * error
 * sucesso
 */

export default function FormRegisterProducts({
  product = intialValuesProduct,
  callback,
  handleCloseModal,
}) {
  const classes = useStyles();

  async function handleSubmit(values) {
    try {
      await api.post("//localhost:3333/products", values);
      // TODO: Se `callback` não for obrigatório para a API do componente, é preciso tratamento
      callback(true, values);
      handleCloseModal();
    } catch (err) {
      /**
       * TODO: por padrão me pareceria razoável chamar: callback(false, null)
       * Mesmo que no cenário atual não utiliza, manteria a api consistente
       */
      console.log(err);
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
