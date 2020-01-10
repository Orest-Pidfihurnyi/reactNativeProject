import * as Yup from 'yup';

function useValidationSchema() {
  const validationSchemaForRegister = Yup.object().shape({
    email: Yup.string()
      .email()
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
    fullName: Yup.string()
      .min(0, 'Must be longer than 0')
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
    password: Yup.string()
      .min(6, 'Must be longer than 6')
      .max(255, 'Must be shorter than 255')
      .required('Must enter a password'),
    passwordRepeat: Yup.string()
      .min(6, 'Must be longer than 6')
      .max(255, 'Must be shorter than 255')
      .required('Must confirm  password')
      .oneOf([Yup.ref('password')], 'Must be equal to password'),
  });

  const validationSchemaForCreatingPost = Yup.object().shape({
    title: Yup.string()
      .max(100, 'Must be shorter than 100 symbols')
      .min(5, 'Must be longer then 5 symbols')
      .required('Must enter an title'),
    description: Yup.string()
      .min(20, 'Must be longer than 20')
      .max(355, 'Must be shorter than 355')
      .required('Must enter an description'),
  });

  const validationSchemaForLogin = Yup.object().shape({
    email: Yup.string()
      .email()
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
    password: Yup.string()
      .min(6, 'Must be longer than 6')
      .max(255, 'Must be shorter than 255')
      .required('Must enter a password'),
  });

  const validationSchemaForRestorePassword = Yup.object().shape({
    email: Yup.string()
      .email()
      .max(255, 'Must be shorter than 255')
      .required('Must enter an email'),
  });

  return {
    validationSchemaForRegister,
    validationSchemaForLogin,
    validationSchemaForRestorePassword,
    validationSchemaForCreatingPost,
  };
}

export default useValidationSchema;
