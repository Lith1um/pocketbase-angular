export interface AuthUserCreate {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name?: string;
  emailVisibility?: boolean;
}