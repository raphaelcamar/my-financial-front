export interface MonthlyCloseRepository {
  verify(query: string, walletId: string): Promise<boolean>;
}
