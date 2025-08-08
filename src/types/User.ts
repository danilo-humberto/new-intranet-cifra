export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  number: string;
  personalNumber?: string;
  function?: string;
  state?: string;
  lotation?: string;
  roles: {
    _id: string;
    cargo: string;
    empresa: string;
    contrato: string;
    code: string;
  }[];
}
