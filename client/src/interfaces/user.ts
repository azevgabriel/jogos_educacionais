export type UserTypes = 'single' | 'group';

export interface UserModel {
  name: string;
  age: number;
  type: UserTypes;
  ip: string;
}
