export const randomId = (): string => {
  const randomBytes = new Uint32Array(5);
  window.crypto.getRandomValues(randomBytes);
  return (
    performance.now().toString(36) +
    Array.from(randomBytes)
      .map(A => A.toString(36))
      .join('')
  );
};
