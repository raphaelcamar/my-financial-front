import { ParamError } from '@/core/domain/errors';
import { getRestPercentage } from './get-rest-percentage';

describe('GetRestPercentage - Unit test', () => {
  test('Should be able to get the rest of percentage', () => {
    const result = getRestPercentage(100, 50);

    expect(result).toBe(50);
  });

  test('Should not be able to get the rest of percentage and throws ParamError: Total', () => {
    const INVALID_VALUE: any = undefined;

    expect(() => {
      getRestPercentage(INVALID_VALUE, 50);
    }).toThrow(ParamError);
  });

  test('Should not be able to get the rest of percentage and throws ParamError: Received', () => {
    const INVALID_VALUE: any = undefined;

    expect(() => {
      getRestPercentage(100, INVALID_VALUE);
    }).toThrow(ParamError);
  });
});
