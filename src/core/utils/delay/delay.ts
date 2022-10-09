/* eslint-disable no-return-await */
/* eslint-disable no-promise-executor-return */
export const delay = async (ms: number): Promise<void> => await new Promise(resolve => setTimeout(resolve, ms));
