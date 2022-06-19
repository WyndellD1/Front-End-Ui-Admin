export type GenericResponse = {
  data?: { [key: string]: unknown };
  errors?: { [key: string]: unknown };
  message?: string;
  statusCode: number;
};
