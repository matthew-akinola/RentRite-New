export type User = {
  address:string;
  date_joined:string;
  email:string;
  id:string;
  is_agent:boolean
  is_verified:boolean
  name:string
  phone:string
  };
  
  export type AuthUser = {
    token: string;
    user: User;
  };
  
  export type Login = {
    email: string;
    password: string;
  };
  export type Register = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    is_agent: boolean;
  };
  
  export type AuthResponse = {
    message: string;
    data?: AuthUser;
    success?: boolean;
  };