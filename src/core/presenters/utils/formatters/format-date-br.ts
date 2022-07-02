import { formatDate } from '@/core/presenters/utils';

export const formatDateBR = (date: string) => (date ? formatDate(new Date(date), 'dd/MM/yyyy') : null);
