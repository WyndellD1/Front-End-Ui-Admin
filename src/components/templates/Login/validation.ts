import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid.')
    .required('Email address is required.')
    .max(255, 'Email address should be less than 255 characters.'),
});
