import { parse } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const parseDate = (dateString: string, dateFormat: string): Date =>
  parse(dateString, dateFormat, new Date(), { locale: ptBR });
