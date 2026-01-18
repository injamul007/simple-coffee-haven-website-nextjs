module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable TypeScript-related rules since we're using JavaScript only
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    
    // JavaScript best practices
    'no-unused-vars': 'warn',
    'no-console': 'off', // Allow console for development
    'prefer-const': 'error',
    'no-var': 'error',
    
    // React specific
    'react/prop-types': 'off', // We're not using PropTypes
    'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    'react/no-unescaped-entities': 'warn',
    
    // Next.js specific
    '@next/next/no-img-element': 'warn', // Prefer Next.js Image component
    '@next/next/no-html-link-for-pages': 'error'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
}