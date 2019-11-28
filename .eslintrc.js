module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"      
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2],        
        "semi": ["error", "always"],
        "camelcase": ["error", { "properties": "always" }],
        "keyword-spacing": ["error", { "before": true }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "space-before-blocks": ["error", "always"],
        "key-spacing": ["error", { "afterColon": true }],
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "no-multiple-empty-lines": ["error", { "max": 1 }],             
    }
    
};