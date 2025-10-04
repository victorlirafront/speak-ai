module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: 'tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },

  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],

  collectCoverageFrom: [
    'src/**/*.{ts,html}',
    '!src/**/*.spec.ts',
    '!src/**/*.stories.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
  ],

  coverageReporters: ['html', 'text-summary', 'lcov'],
  coverageDirectory: 'coverage',

  testMatch: ['<rootDir>/src/**/*.spec.ts'],

  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },

  roots: ['<rootDir>/src'],
};
