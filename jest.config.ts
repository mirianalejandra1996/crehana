module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', // O 'jsdom' si estás trabajando con React
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Preprocesa los archivos TypeScript
    },
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'], // Coincide con los archivos de prueba
  };
  