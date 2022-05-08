module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
}
