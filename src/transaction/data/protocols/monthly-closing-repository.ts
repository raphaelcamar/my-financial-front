export interface MonthlyCloseRepository {
  verify(query: string, walletId: string): Promise<boolean>;
  closeMonth(month: number, year: number, walletId: string): Promise<void>;
}
