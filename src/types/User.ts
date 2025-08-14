export interface UserResponse {
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
    _id?: string;
    cargo?: string;
    empresa?: string;
    contrato?: string;
    code: string;
  }[];
}

export interface UserPayload {
  _id?: string;
  name: string;
  email: string;
  number: string;
  personalNumber?: string;
  function?: string;
  state?: string;
  lotation?: string;
  password?: string;
  roleCodes: string[];
}
