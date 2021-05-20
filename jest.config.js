module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/tests/unit/config/test-utils.js'],
    moduleNameMapper: { '.(css|sass)$': '<rootDir>/cssStub.js' },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!src/main.js',
        '!src/store/**/*.js',
        '!src/router/router.js',
    ],
    coverageReporters: ['lcov'],
}
