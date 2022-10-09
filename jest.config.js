module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/**/protocols/**',
    '!<rootDir>/src/**/icons/*-icon.tsx',
    '!<rootDir>/src/**/styles.ts',
    '!<rootDir>/src/**/pages/**/*',
    '!<rootDir>/src/**/validation/**/*',
    '!<rootDir>/src/**/validator/**/*',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/imports.ts',
    '!<rootDir>/src/**/*.data.ts',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
}
