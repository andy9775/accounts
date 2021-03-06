// @flow
/* eslint-disable max-len */
import type {
  CreateUserType,
  PasswordLoginUserType,
  LoginReturnType,
} from '@accounts/common';

export interface TransportInterface {
  createUser(user: CreateUserType): Promise<string>,
  loginWithPassword(user: PasswordLoginUserType, password: string): Promise<LoginReturnType>,
  logout(accessToken: string): Promise<void>,
  refreshTokens(accessToken: string, refreshToken: string) : Promise<LoginReturnType>
}
