module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "16.0"
        }
    },
    "rules": {
        "indent": [
            0,
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/no-find-dom-node": [
            0
        ]
    }
};