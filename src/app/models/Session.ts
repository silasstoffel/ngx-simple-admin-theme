
import User from './User';

export default class Session {

  token: string;
  authorized: boolean;
  user: User;
  expire_in: string;

  constructor() {}
}
