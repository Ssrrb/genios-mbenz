import { hashSync } from 'bcrypt-ts';

export function generateHashedPassword(password: string) {
  return hashSync(password, 8);
}
