import { TransactionRepository } from '@/transaction/data';

export class DeleteTransaction {
  constructor(private transactionRepository: TransactionRepository, private transactionId: string) {}

  async execute() {
    this.transactionRepository.deleteTransacion(this.transactionId);
  }
}
