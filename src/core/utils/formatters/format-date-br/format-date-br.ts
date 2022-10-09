import { formatDate } from '@/core/utils';

export const formatDateBR = (date: string) => (date ? formatDate(new Date(date), 'dd/MM/yyyy') : null);
