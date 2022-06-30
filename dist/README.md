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

## HTTP Loading interceptor 
1. app.component.html
```
<div *ngIf="loading" class="loading-container flex-content-center">
    <mat-progress-spinner
      color="primary"
      mode="indeterminate">
    </mat-progress-spinner>
</div>

<router-outlet></router-outlet>
```
2. app.component.ts
```
export class AppComponent implements OnInit{
 
  loading: boolean = false;
  constructor(private loadingService: LoadingService) {}

  async ngOnInit() {
    this.loadingService.loadingSub
    .subscribe((loading) => {
      this.loading = loading;
    });
  }
}
```

3. Agregar ```MatProgressSpinnerModule``` y  en app.module.ts


4. Importar ```SofSharedModule``` en app.module.ts o implementar el interceptor de la siguiente forma:

```
providers: [ 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }
]
```
