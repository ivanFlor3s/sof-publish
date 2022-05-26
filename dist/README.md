# Sof-Shared

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## Usage styles
1. Instalar paquete 
```npm i sof-shared```
2. Modificar **angular.json** de la aplicacion para que tome los estilos del package
```
"styles": [
    "./node_modules/sof-shared/assets/style.scss"
]
```
3. En caso de que no tome los estilos, reiniciar la aplicacion (bajar y levantar con ```ng serve ```)


## Build

Run `ng build sof-shared` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build sof-shared`, go to the dist folder `cd dist/sof-shared` and run `npm publish`.

## Running unit tests

Run `ng test sof-shared` to execute the unit tests via [Karma](https://karma-runner.github.io).
