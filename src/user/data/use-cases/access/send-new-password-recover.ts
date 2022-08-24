import { AccessRepository } from '@/user/data/protocols';

export class SendNewPasswordRecover {
  constructor(private accessRepository: AccessRepository, private password: string, private email: string) {}

  async execute() {
    await this.accessRepository.sendNewPasswordRecover(this.password, this.email);
  }
}
