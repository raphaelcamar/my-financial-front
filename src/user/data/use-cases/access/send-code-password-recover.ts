import { AccessRepository } from '@/user/data/protocols';

export class SendCodePassowrdRecover {
  constructor(private accessRepository: AccessRepository, private email: string, private code: string) {}

  async execute() {
    await this.accessRepository.sendCodePasswordRecover(this.code, this.email);
  }
}
