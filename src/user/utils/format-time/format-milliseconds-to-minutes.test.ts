import { ParamError } from '@/core/domain/errors';
import { formatMillisecondsToMinutes } from './format-milliseconds-to-minutes';

const THREE_MINUTES_AND_HALF = 210000;
const TWO_MINUTES = 120000;

describe('FormatTime - Unit Test', () => {
  test('Should be able to correctly format the time of three minutes and half', () => {
    const minuteFormatted = formatMillisecondsToMinutes(THREE_MINUTES_AND_HALF);

    expect(minuteFormatted).toBe('3:30');
  });

  test('Should be able to correctly format the time of two minutes', () => {
    const minuteFormatted = formatMillisecondsToMinutes(TWO_MINUTES);

    expect(minuteFormatted).toBe('2:00');
  });

  test('Should not be able to format and throw ParamError', () => {
    const WRONG_VALUE: any = undefined;

    expect(() => {
      formatMillisecondsToMinutes(WRONG_VALUE);
    }).toThrow(ParamError);
  });
});
