import { BaseModel } from './baseModel';

export type SignUpParams = {
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: Date;
  phoneNumber: string;
  gender: 'Male' | 'Female' | string;
  email: string;
  status?: string;
  role: string;
};

export type UserDetails = {
  id: number;
  fullName: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: Date;
  phoneNumber: number;
  gender: 'Male' | 'Female';
  email: string;
  status: string;
  role: string;
};

export type User = {
  isVerified: boolean;
  details: UserDetails;
} & BaseModel;
