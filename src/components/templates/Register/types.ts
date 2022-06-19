export type SignUpValues = {
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: Date;
  phoneNumber: string;
  gender: 'Male' | 'Female' | string;
  email: string;
  role: string;
};
