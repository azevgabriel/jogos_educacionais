import { AcessibilityModal } from './acessibility';
import { UserModel } from './user';

export interface ConfigModal {
  acessibility: AcessibilityModal;
  user: UserModel | undefined;
}
