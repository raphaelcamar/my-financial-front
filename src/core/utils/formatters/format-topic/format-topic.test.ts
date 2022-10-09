import { TypeTopic } from '@/transaction/domain';
import { formatTopic } from './format-topic';

describe('FormatTopic - Unit tests', () => {
  test('Shoud be able to receive topic as FOOD and return COMIDA', () => {
    const result = formatTopic('FOOD');

    expect(result).toBe('Comida');
  });

  test('Shoud be able to receive topic as HEALTH and return SAÚDE', () => {
    const result = formatTopic('HEALTH');

    expect(result).toBe('Saúde');
  });

  test('Shoud be able to receive topic as OTHER and return OUTRO', () => {
    const result = formatTopic('OTHER');

    expect(result).toBe('Outro');
  });

  test('Shoud be able to receive topic as SALARY and return Salário', () => {
    const result = formatTopic('SALARY');

    expect(result).toBe('Salário');
  });

  test('Shoud be able to receive topic as TRANSPORT and return Transporte', () => {
    const result = formatTopic('TRANSPORT');

    expect(result).toBe('Transporte');
  });

  test('Shoud not be able to find a topic and return -', () => {
    const result = formatTopic('test' as TypeTopic);

    expect(result).toBe('-');
  });
});
