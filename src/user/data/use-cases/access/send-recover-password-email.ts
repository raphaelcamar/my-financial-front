import { AccessRepository } from '@/user/data/protocols';

export class SendRecoverPasswordEmail {
  constructor(private accessRepository: AccessRepository, private email: string) {}

  async execute() {
    await this.accessRepository.sendRecoverPasswordEmail(this.email);
  }
}
