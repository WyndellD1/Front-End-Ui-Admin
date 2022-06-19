export type GenericError = {
  status_code: number;
  message: string;
};

export type LoginValidationError = {
  status_code: 400;
  errors: {
    email?: string;
    password?: string;
    remember?: string;
  };
};
