import { PaymentType } from '../domain';

export const formatPaymentType = (paymentType: PaymentType): string => {
  switch (paymentType) {
    case 'BANK_SLIP':
      return 'Boleto bancário';
    case 'CREDIT':
      return 'Crédito';
    case 'CRYPTO':
      return 'Criptomoeda';
    case 'DEBIT':
      return 'Débito';
    case 'MONEY':
      return 'Dinheiro';
    case 'OTHER':
      return 'Outro';
    case 'PIX':
      return 'PIX';
    case 'TRANSFER':
      return 'Transferência bancária';
    default:
      return '-';
  }
};
