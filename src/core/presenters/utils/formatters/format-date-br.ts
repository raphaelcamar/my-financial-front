import { formatDate } from '@/core/presenters/utils';

export const formatDateBR = (date: string) => formatDate(new Date(date), 'dd/MM/yyyy');
