# NgTapis

This is an angular library for interacting with the Tapis apis at TACC. This generates
the Api client automatically from the openapi.yaml file using `openapi-generator-cli`


## Building the client


* Edit package.json and change ngVersion to set desired version of angular (optional)
* Edit package.json and change npmVersion to bump to a new release

```
npm run gen
cd projects/ng-tapis
npm run build
npm publish dist/
```


## Note:
Versions of app contain the angular version at the end:

2.1.9 means 2.1 of this library and built for angular 9
