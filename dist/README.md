## Clases
* required-label: asterisco que marca el campo requerido

## Configuración
Textos para validaciones

En la aplicación agregar:
ControlsModule.forRoot(config)

const config = {
  'required': (label?: string) => label + ' required!!',
  'maxlength': (label?: string, error?: any) => label + ' maxLength!!',
  'minlength': (label?: string, error?: {actualLength: number, requiredLength: number}) => label + ' minLength!! ' + error?.requiredLength
};


https://github.com/udos86/ng-dynamic-forms#custom-validators