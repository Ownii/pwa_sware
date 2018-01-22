module.exports = {
    env: {
        browser: true,
        node: true,
        'jest/globals': true
    },
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'prettier/react',
        'plugin:react/recommended',
        'plugin:jest/recommended'
    ],
    globals: {
        API_TARGET: false,
        timeTravel: false
    },
    plugins: [
        'prettier',
        'react',
        'jest'
    ],
    rules: {
        'prettier/prettier': 'error'
    }
}