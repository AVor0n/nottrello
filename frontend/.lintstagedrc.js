export default {
  'src/**/*.{ts,vue}': () => ['tsc -p tsconfig.json  --noEmit'],
  '*.{ts,vue}': ['eslint --fix', 'prettier --write'],
  '*.{css,vue}': ['stylelint --fix', 'prettier --write'],
  '!(*.{ts,vue,css})': ['prettier --write --ignore-unknown'],
};
