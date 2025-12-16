interface IAuth {
  id: number;
  email: string;
}

declare namespace Express {
  export interface Request {
    auth?: IAuth;
  }
}