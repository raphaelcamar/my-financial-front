import { AccessRepository } from '@/access-and-auth/data/protocols';

export class SendRecoverPasswordEmail {
  constructor(private accessRepository: AccessRepository, private email: string) {}

  async execute() {
    await this.accessRepository.sendRecoverPasswordEmail(this.email);
  }
}
