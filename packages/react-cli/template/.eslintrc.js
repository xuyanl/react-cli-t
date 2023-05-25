module.exports = {
    env: {
        commonjs: true,
        es2021: true
    },
    ignorePatterns: ['node_modules/', 'config/', 'dist'],
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react/jsx-runtime'],
    overrides: [],
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/no-unused-vars': 0
    }
}
