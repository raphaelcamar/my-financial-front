import { MonthlyCloseRepository } from '../protocols';

export class CloseMonth {
  constructor(
    private monthlyCloseRepository: MonthlyCloseRepository,
    private month: number,
    private year: number,
    private walletId: string
  ) {}

  async execute(): Promise<void> {
    this.monthlyCloseRepository.closeMonth(this.month, this.year, this.walletId);
  }
}
