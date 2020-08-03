module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    rules: {
        'no-var': "error",
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ]
    }
};
