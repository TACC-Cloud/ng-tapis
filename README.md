# NgTapis

This is an angular library for interacting with the Tapis apis at TACC. This generates
the Api client automatically from the openapi.yaml file using `openapi-generator-cli`

## Building the client

```
npm run gen
npm run build
cd dist/ng-tapis
npm run build
npm publish
```
