/* eslint-config-next v16 ships native flat configs, so the old @eslint/eslintrc
   FlatCompat shim is no longer needed -- and it crashed on this config with a
   "Converting circular structure to JSON" error. Import the flat configs
   directly instead. */
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
