import * as Yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
  error: { text: '' },
  successful: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),

});

export default validationSchema;
