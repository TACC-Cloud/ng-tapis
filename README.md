# NgTapis

This is an angular library for interacting with the Tapis apis at TACC. This generates
the Api client automatically from the openapi.yaml file using `openapi-generator-cli`


Versions of app contain the angular version at the end:

2.1.9 means 2.1 of this library and built for angular 9


## Building the client

```
npm run gen
cd dist/ng-tapis
npm run build
npm publish
```
