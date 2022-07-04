import * as Yup from 'yup';
import 'yup-phone';

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name address is required.')
    .max(255, 'First Name address should be less than 255 characters.'),
  lastName: Yup.string()
    .required('Last Name address is required.')
    .max(255, 'Last Name address should be less than 255 characters.'),
  middleName: Yup.string().max(
    255,
    'Middle Name address should be less than 255 characters.',
  ),
  phoneNumber: Yup.string()
    .phone('PH', true, 'Phone Number is invalid')
    .required('Phone number is required.'),
  email: Yup.string()
    .email('Email is invalid')
    .max(255, 'Email address should be less than 255 characters.')
    .required('Email is required.'),
  gender: Yup.string().required('Gender is required'),
  password: Yup.string().required('Password is required'),
});
