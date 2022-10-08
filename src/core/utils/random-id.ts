export const randomId = (): string => {
  const a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map(A => A.toString(36))
      .join('')
  ).replace(/./g, `${Math.random()}${Intl.DateTimeFormat().resolvedOptions().timeZone}${Date.now()}`);
};
