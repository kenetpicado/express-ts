interface IAuth {
  id: number;
  username: string;
}

declare namespace Express {
  export interface Request {
    auth?: IAuth;
  }
}
