/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
module.exports = {
  schemaFile: '../../server/docs/swagger.yaml',
  apiFile: '../src/shared/api/api.ts',
  outputFile: '../src/shared/api/__generated__.ts',
  hooks: {
    lazyQueries: true,
    mutations: true,
    queries: true,
  },
  tag: true,
};
