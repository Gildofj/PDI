import { Formik, Form, Field } from "formik";
import { TextField } from "@material-ui/core";
import useStyles from "./useStyles";

const intialValuesProduct = {
  name: "",
  price: "",
};

function handleSubmit(event) {
  console.log("teste");
}

export default function FormCadastrarProdutos({
  product = intialValuesProduct,
}) {
  const classes = useStyles();

  return (
    <Formik initialValues={product} onSubmit={handleSubmit}>
      {(values, handleSubmit) => (
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
