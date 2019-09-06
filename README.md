# NgTapis

This is an angular 6+ library for interacting with the Tapis apis at TACC. This generates
the Api client automatically from the openapi.yaml file using `ng-openapi-gen`

https://www.npmjs.com/package/ng-openapi-gen

## Building the client

```
npm run gen
npm run build
cd dist/ng-tapis
npm version patch|minor
npm publish
```
