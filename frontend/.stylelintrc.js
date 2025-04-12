import { propertyOrdering } from 'stylelint-semantic-groups';

propertyOrdering.forEach(list => {
  list.forEach(item => {
    //@ts-expect-error так нада
    item.emptyLineBefore = 'never';
  });
});

export default {
  extends: ['stylelint-config-recommended-vue'],
  plugins: [
    'stylelint-order',
    'stylelint-use-logical-spec',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'liberty/use-logical-spec': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'order/properties-order': propertyOrdering,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
  },
  defaultSeverity: 'error',
};
