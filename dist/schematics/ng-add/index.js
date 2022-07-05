"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngAdd = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const schematics_2 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
//////////////////////////////////////////////////////////////////////////////////////
function installPackage() {
    return (tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
function addKeycloakJsInIndexHTML(keycloakServerIp, keycloakServerPort) {
    return (tree) => {
        var _a;
        const indexHtmlPath = '/src/index.html';
        if (!tree.exists(indexHtmlPath))
            throw new schematics_2.SchematicsException(`${indexHtmlPath} not found`);
        const content = (_a = tree.read(indexHtmlPath)) === null || _a === void 0 ? void 0 : _a.toString();
        if (!content)
            throw new schematics_2.SchematicsException(`${indexHtmlPath} is empty`);
        const keycloakJsIndex = content.indexOf('js/keycloak.js');
        if (keycloakJsIndex != -1) {
            console.log(`<script ...auth/js/keycloak.js"> already exists in ${indexHtmlPath}. Skipping`);
            return tree;
        }
        const headCloseTagIndex = content.indexOf('</head>');
        if (headCloseTagIndex == -1)
            throw new schematics_2.SchematicsException(`</head> not found in ${indexHtmlPath}`);
        const keycloakJsScript = `  <script src="http://${keycloakServerIp}:${keycloakServerPort}/auth/js/keycloak.js"></script>\n`;
        // now we update the template using the tree recorder
        const recorder = tree.beginUpdate(indexHtmlPath);
        recorder.insertLeft(headCloseTagIndex, keycloakJsScript);
        tree.commitUpdate(recorder);
        return tree;
    };
}
function addKeycloakConfigInAppModules() {
    return (tree) => {
        var _a;
        const appModulePath = '/src/app/app.module.ts';
        if (!tree.exists(appModulePath))
            throw new schematics_2.SchematicsException(`${appModulePath} not found`);
        const content = (_a = tree.read(appModulePath)) === null || _a === void 0 ? void 0 : _a.toString();
        if (!content)
            throw new schematics_2.SchematicsException(`${appModulePath} is empty`);
        const initializeKeycloakIndex = content.indexOf('initializeKeycloak');
        if (initializeKeycloakIndex != -1) {
            console.log(`initializeKeycloak already exists in ${appModulePath}. Skipping`);
            return tree;
        }
        // imports y configuracion
        const ngModuleDecoratorIndex = content.indexOf('@NgModule');
        if (ngModuleDecoratorIndex == -1)
            throw new schematics_2.SchematicsException(`@NgModule not found in ${appModulePath}`);
        const keycloakConfig = `import { KeycloakConfigurations } from 'sof-shared/lib/configurations/keycloak-configurations';
import { environment } from 'src/environments/environment';
import { SofSharedModule } from 'sof-shared';

const keycloakConfig = {
  clientId: environment.keycloakClientId,
  ip: environment.keycloakIp,
  port: environment.keycloakPort,
  realm: environment.keycloakRealm
} as KeycloakConfigurations;

`;
        // now we update the template using the tree recorder
        const recorder = tree.beginUpdate(appModulePath);
        recorder.insertLeft(ngModuleDecoratorIndex, keycloakConfig);
        // -----------------------------------------------------------------
        // module imports
        const modulesImportsIndex = content.indexOf('imports: [');
        if (modulesImportsIndex == -1)
            throw new schematics_2.SchematicsException(`Cant find 'imports: [' in ${appModulePath}. Add modules import manually 'SofSharedModule.forRoot(keycloakConfig)'`);
        else {
            const sofSharedModuleImport = `
    SofSharedModule.forRoot(keycloakConfig),
    `;
            recorder.insertRight(modulesImportsIndex + 10, sofSharedModuleImport);
        }
        // -----------------------------------------------------------------
        tree.commitUpdate(recorder);
        return tree;
    };
}
function addNgxTranslateConfigInAppModule() {
    return (tree) => {
        var _a;
        const appModulePath = '/src/app/app.module.ts';
        if (!tree.exists(appModulePath))
            throw new schematics_2.SchematicsException(`${appModulePath} not found`);
        const content = (_a = tree.read(appModulePath)) === null || _a === void 0 ? void 0 : _a.toString();
        if (!content)
            throw new schematics_2.SchematicsException(`${appModulePath} is empty`);
        const httpLoaderFactoryIndex = content.indexOf('HttpLoaderFactory');
        if (httpLoaderFactoryIndex != -1) {
            console.log(`HttpLoaderFactory already exists in ${appModulePath}. Skipping`);
            return tree;
        }
        // imports y configuracion
        const ngModuleDecoratorIndex = content.indexOf('@NgModule');
        if (ngModuleDecoratorIndex == -1)
            throw new schematics_2.SchematicsException(`@NgModule not found in ${appModulePath}`);
        const keycloakConfig = `import { HttpClientModule } from '@angular/common/http';
    import { HttpClient } from '@angular/common/http';
    import { TranslateHttpLoader } from '@ngx-translate/http-loader';
    import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService, } from '@ngx-translate/core';

    export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
      return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
    }`;
        // now we update the template using the tree recorder
        const recorder = tree.beginUpdate(appModulePath);
        recorder.insertLeft(ngModuleDecoratorIndex, keycloakConfig);
        // -----------------------------------------------------------------
        // module imports
        const modulesImportsIndex = content.indexOf('imports: [');
        if (modulesImportsIndex == -1)
            throw new schematics_2.SchematicsException(`Cant find 'imports: [' in ${appModulePath}. Add modules import manually 'TranslateModule'`);
        else {
            const TranslateModuleImport = `
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (HttpLoaderFactory),
          deps: [HttpClient],
        },
      }),
    `;
            recorder.insertRight(modulesImportsIndex + 10, TranslateModuleImport);
        }
        // -----------------------------------------------------------------
        // module imports
        const modulesProvidersIndex = content.indexOf('providers: [');
        if (modulesProvidersIndex == -1)
            throw new schematics_2.SchematicsException(`Cant find 'providers: [' in ${appModulePath}. Add modules import manually 'TranslatePipe, TranslateService'`);
        else {
            const TranslateModulepProvider = `
      TranslatePipe,
      TranslateService,
    `;
            recorder.insertRight(modulesProvidersIndex + 12, TranslateModulepProvider);
        }
        // -----------------------------------------------------------------
        tree.commitUpdate(recorder);
        return tree;
    };
}
function addSilentCheckSsoHTML() {
    return (tree) => {
        const silentCheckSsoPath = '/src/assets/silent-check-sso.html';
        if (tree.exists(silentCheckSsoPath)) {
            console.log(`${silentCheckSsoPath} already exists. Skipping`);
            return tree;
        }
        const silentCheckSsoContent = `<html>
<body>
  <script>
    parent.postMessage(location.href, location.origin);
  </script>
</body>
</html>
`;
        tree.create(silentCheckSsoPath, silentCheckSsoContent);
        return tree;
    };
}
function addGlobalStyleInAngularJson(globalStylePath) {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const angularJsonPath = '/angular.json';
        const workspace = yield (0, workspace_1.getWorkspace)(tree);
        const project = workspace.projects.keys().next().value;
        context.logger.info(`Current project where angular.json will be updated:  ${project}`);
        if (!tree.exists(angularJsonPath))
            throw new schematics_2.SchematicsException(`${angularJsonPath} not found`);
        const contentJson = ((_a = tree.read(angularJsonPath)) === null || _a === void 0 ? void 0 : _a.toString('utf-8')) || '';
        const json = JSON.parse(contentJson);
        //EN BUILD
        var optionsBuildJson = json['projects'][project]['architect']['build']['options'];
        pushWhenPossible(optionsBuildJson['styles'], globalStylePath, 'Global style path not added in build because the referene already exists', context);
        //EN TEST
        var optionsTestJson = json['projects'][project]['architect']['test']['options'];
        pushWhenPossible(optionsTestJson['styles'], globalStylePath, 'Global style path not added in test because the referene already exists', context);
        tree.overwrite(angularJsonPath, JSON.stringify(json, null, 2));
        return;
    });
}
function addLibsInPackageJson() {
    const libs = [
        {
            pkg: "luxon",
            version: "^2.4.0",
            dev: false
        },
        {
            pkg: "rxjs",
            version: "~7.5.0",
            dev: false
        },
        {
            pkg: "sof-i18n-controls",
            version: "^1.1.10",
            dev: false
        },
        {
            pkg: "sof-ng-controls",
            version: "^1.6.7",
            dev: false
        },
        {
            pkg: "@ngrx/store",
            version: "^13.2.0",
            dev: false
        },
        {
            pkg: "@types/luxon",
            version: "^2.3.2",
            dev: false
        },
        {
            pkg: "@ngrx/store-devtools",
            version: "^13.2.0",
            dev: true
        },
    ];
    let array = [];
    libs.filter(item => !item.dev).forEach(item => {
        array.push(addPackageToPackageJson(item.pkg, item.version));
    });
    libs.filter(item => item.dev).forEach(item => {
        array.push(addDevPackageToPackageJson(item.pkg, item.version));
    });
    return array;
}
function addPackageToPackageJson(pkg, version) {
    return (host) => __awaiter(this, void 0, void 0, function* () {
        if (host.exists("package.json")) {
            const sourceText = host.read("package.json").toString("utf-8");
            const json = JSON.parse(sourceText);
            if (!json.dependencies) {
                json.dependencies = {};
            }
            if (!json.dependencies[pkg]) {
                json.dependencies[pkg] = version;
                json.dependencies = sortObjectByKeys(json.dependencies);
            }
            host.overwrite("package.json", JSON.stringify(json, null, 2));
        }
        return;
    });
}
function addDevPackageToPackageJson(pkg, version) {
    return (host) => __awaiter(this, void 0, void 0, function* () {
        if (host.exists("package.json")) {
            const sourceText = host.read("package.json").toString("utf-8");
            const json = JSON.parse(sourceText);
            if (!json.devDependencies) {
                json.devDependencies = {};
            }
            if (!json.devDependencies[pkg]) {
                json.devDependencies[pkg] = version;
                json.devDependencies = sortObjectByKeys(json.devDependencies);
            }
            host.overwrite("package.json", JSON.stringify(json, null, 2));
        }
        return;
    });
}
function sortObjectByKeys(obj) {
    return Object.keys(obj)
        .sort()
        .reduce((result, key) => {
        result[key] = obj[key];
        return result;
    }, {});
}
function pushWhenPossible(array, element, errorMsg, context) {
    if (!array.includes(element)) {
        array.push(element);
    }
    else {
        context.logger.warn(errorMsg);
    }
}
function setAllowSyntheticDefaultImportsTrue() {
    return (tree) => {
        var _a;
        const tsConfigJsonPath = '/tsconfig.json';
        if (!tree.exists(tsConfigJsonPath))
            throw new schematics_2.SchematicsException(`${tsConfigJsonPath} not found`);
        const content = (_a = tree.read(tsConfigJsonPath)) === null || _a === void 0 ? void 0 : _a.toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
        if (!content)
            throw new schematics_2.SchematicsException(`${tsConfigJsonPath} is empty`);
        let tsConfigObj = JSON.parse(content);
        if (!tsConfigObj)
            tsConfigObj = {};
        if (!tsConfigObj['compilerOptions'])
            tsConfigObj['compilerOptions'] = {};
        if (tsConfigObj['compilerOptions']['allowSyntheticDefaultImports'] === true) {
            console.log(`${tsConfigJsonPath} > compilerOptions > allowSyntheticDefaultImports is already 'true'. Skipping`);
            return tree;
        }
        tsConfigObj['compilerOptions']['allowSyntheticDefaultImports'] = true;
        const tsConfigJSON = JSON.stringify(tsConfigObj, null, '  ');
        tree.overwrite(tsConfigJsonPath, tsConfigJSON);
        return tree;
    };
}
function addKeycloakConfigEnvironmentExample(keycloakServerIp, keycloakServerPort, realm, clientId) {
    return (tree) => {
        const environmentPath = '/src/environments/environment.example.ts';
        if (tree.exists(environmentPath)) {
            console.log(`<script ...auth/js/keycloak.js"> already exists in ${environmentPath}. Skipping`);
            return tree;
        }
        const exampleEnvironmentContent = `export const environment = {
  // Add these properties to the project environment.ts's with the corresponding values for each one
  keycloakIp: '${keycloakServerIp}',
  keycloakPort: ${keycloakServerPort},
  keycloakRealm: '${realm}',
  keycloakClientId: '${clientId}',
};
`;
        console.log(`Writing example environment file in ${environmentPath}`);
        console.log(`Configure the projects environments.ts's with the examples configurations according to each environments values`);
        tree.create(environmentPath, exampleEnvironmentContent);
        return tree;
    };
}
function addSweetAlterDefaultCustomClass() {
    return (tree) => {
        var _a;
        const appModulePath = '/src/app/app.module.ts';
        if (!tree.exists(appModulePath))
            throw new schematics_2.SchematicsException(`${appModulePath} not found`);
        const content = (_a = tree.read(appModulePath)) === null || _a === void 0 ? void 0 : _a.toString();
        if (!content)
            throw new schematics_2.SchematicsException(`${appModulePath} is empty`);
        const customClassSweetIndex = content.indexOf('CustomClassSweet');
        if (customClassSweetIndex != -1) {
            console.log(`CustomClassSweet already exists in ${appModulePath}. Skipping`);
            return tree;
        }
        const ngModuleDecoratorIndex = content.indexOf('@NgModule');
        if (ngModuleDecoratorIndex == -1)
            throw new schematics_2.SchematicsException(`@NgModule not found in ${appModulePath}`);
        const sweetAlertDefaultCustomClass = `
import { CustomClassSweet } from 'sof-ng-controls';
const common: string = 'mat-focus-indicator mat-button mat-button-base mat-primary _mat-animation-noopable';

const commonClass: CustomClassSweet = {
  basic: 'mat-raised-button ' + common,
  dialog: {
    confirmButton: 'mat-raised-button ' + common,
    cancelButton: 'mat-stroked-button ' + common,
    denyButton: 'mat-basic-button distintClassDialogSweet ' + common
  },
  confirm: {
    confirmButton: 'mat-raised-button ' + common,
    cancelButton: 'mat-stroked-button distintClassSweet ' + common,
  }
}

`;
        // now we update the template using the tree recorder
        const recorder = tree.beginUpdate(appModulePath);
        recorder.insertLeft(ngModuleDecoratorIndex, sweetAlertDefaultCustomClass);
        tree.commitUpdate(recorder);
        return tree;
    };
}
function addValidationDefaultErrorMessages() {
    return (tree) => {
        var _a;
        const appModulePath = '/src/app/app.module.ts';
        if (!tree.exists(appModulePath))
            throw new schematics_2.SchematicsException(`${appModulePath} not found`);
        const content = (_a = tree.read(appModulePath)) === null || _a === void 0 ? void 0 : _a.toString();
        if (!content)
            throw new schematics_2.SchematicsException(`${appModulePath} is empty`);
        const customClassSweetIndex = content.indexOf('defaultValidationErrorMessages');
        if (customClassSweetIndex != -1) {
            console.log(`defaultValidationErrorMessages already exists in ${appModulePath}. Skipping`);
            return tree;
        }
        const ngModuleDecoratorIndex = content.indexOf('@NgModule');
        if (ngModuleDecoratorIndex == -1)
            throw new schematics_2.SchematicsException(`@NgModule not found in ${appModulePath}`);
        const sweetAlertDefaultCustomClass = `const config = {
  'required': (label?: string) => 'ERROR.DEFAULT-REQUIRED',
  'min': (label?: string, error?: any | { min: any, customMessage: string }) => 'ERROR.DEFAULT-MIN',
  'max': (label?: string, error?: any | { max: any, customMessage: string }) => 'ERROR.DEFAULT-MAX',
  //'function': (label?: string, error?: { max: maxValue, customMessage: string }) => 'ERROR.DEFAULT-FUNCTION',
  'minlength': (label?: string, error?: any | { minLength: any, customMessage: string }) => 'ERROR.DEFAULT-MINLENGTH',
  'maxlength': (label?: string, error?: any | { maxLength: any, customMessage: string }) => 'ERROR.DEFAULT-MAXLENGTH',
  'pattern': (label?: string, error?: any | { pattern: any, customMessage: string }) => 'ERROR.DEFAULT-PATTERN',
  'minDate': (label?: string, error?: any | { minDate: any, customMessage: string }) => 'ERROR.DEFAULT-MINDATE',
  'maxDate': (label?: string, error?: any | { maxDate: any, customMessage: string }) => 'ERROR.DEFAULT-MAXDATE',
  'afterOrEqualTo': (label?: string, error?: any | { minDate: any, customMessage: string }) => 'ERROR.DEFAULT-AFTER-OR-EQUAL-TO',
  'beforeOrEqualTo': (label?: string, error?: any | { maxDate: any, customMessage: string }) => 'ERROR.DEFAULT-BEFORE-OR-EQUAL-TO',
  'maxFileSize': (label?: string, error?: any | { maxFileSize: any, actualSize: any, files: any, customMessage: string }) => 'ERROR.DEFAULT-MAX-FILE-SIZE',
  'acceptedFileTypes': (label?: string, error?: any | { acceptedFileTypes: any, actualTypes: any, files: any, customMessage: string }) => 'ERROR.DEFAULT-ACCEPTED-FILE-TYPES',
  'email': (label?: string, error?: any | { email: any, customMessage: string }) => 'ERROR.DEFAULT-EMAIL',
  'requiredIf': (label?: string, error?: any | { requiredIf: any, customMessage: string }) => 'ERROR.DEFAULT-REQUIRED-IF',
  'requiredIfFieldIsEmpty': (label?: string, error?: any | { requiredIfFieldIsEmpty: any, customMessage: string }) => 'ERROR.DEFAULT-REQUIRED-IF-FIELD-IS-EMPTY',
  'requiredIfFieldIsNotEmpty': (label?: string, error?: any | { requiredIfFieldIsNotEmpty: any, customMessage: string }) => 'ERROR.DEFAULT-REQUIRED-IF-FIELD-IS-NOT-EMPTY',
  'lessOrEqualTo': (label?: string, error?: any | { lessOrEqualTo: any, customMessage: string }) => 'ERROR.DEFAULT-LESS-OR-EQUAL-TO',
  'moreOrEqualTo': (label?: string, error?: any | { moreOrEqualTo: any, customMessage: string }) => 'ERROR.DEFAULT-MORE-OR-EQUAL-TO',
};

`;
        // now we update the template using the tree recorder
        const recorder = tree.beginUpdate(appModulePath);
        recorder.insertLeft(ngModuleDecoratorIndex, sweetAlertDefaultCustomClass);
        tree.commitUpdate(recorder);
        return tree;
    };
}
function addBasei18nJson(lang) {
    return (tree) => {
        const i18nPathDest = '/src/assets/i18n';
        const i18nPathSrc = '/node_modules/sof-shared/assets/i18n';
        if (tree.exists(`${i18nPathDest}/${lang}.json`)) {
            // throw new SchematicsException(`${i18nPathDest}/${lang}.json already exists. Skipping`);
            console.log(`${i18nPathDest}/${lang}.json already exists. Skipping`);
            ;
            return tree;
        }
        if (!tree.exists(`${i18nPathSrc}/${lang}.json`)) {
            // throw new SchematicsException(`${i18nPathSrc}/${lang}.json not exists. Skipping`);
            console.log(`${i18nPathSrc}/${lang}.json already exists. Skipping`);
            ;
            return tree;
        }
        console.log(`Copying i18n ${lang.toLocaleUpperCase()} file in ${i18nPathDest}/${lang}.json`);
        let src = tree.read(`${i18nPathSrc}/${lang}.json`);
        tree.create(`${i18nPathDest}/${lang}.json`, src);
        return tree;
    };
}
function createDirectories() {
    return (tree) => {
        const directories = [
            'src/app/core/.gitkeep',
            'src/app/core/actions/.gitkeep',
            'src/app/core/enum/.gitkeep',
            'src/app/core/interfaces/.gitkeep',
            'src/app/core/reducers/.gitkeep',
            'src/app/core/services/.gitkeep',
            'src/app/modules/.gitkeep',
            'src/app/shared/.gitkeep',
            'src/app/shared/guards/.gitkeep',
            'src/app/shared/componrnts/.gitkeep'
        ];
        directories.forEach(dir => {
            if (tree.exists(dir)) {
                console.log(`${dir} already exists. Skipping`);
                return;
            }
            tree.create(dir, '');
        });
        return tree;
    };
}
function addToastServiceAndProvider() {
    return (tree) => {
        //service
        const toastServicePath = '/src/app/core/services/toast.service.ts';
        if (tree.exists(toastServicePath)) {
            console.log(`${toastServicePath} already exists. Skipping`);
            return tree;
        }
        const toastServiceContent = `import { Injectable } from '@angular/core';
  import Swal from 'sweetalert2';
  import { SweetAlertIcon } from 'sweetalert2';

  @Injectable({
    providedIn: 'root'
  })
  export class ToastService {

    constructor() { }

    async show( 
      title: string, 
      icon: SweetAlertIcon 
    ){
      const mixinToast = Swal.mixin({
        toast: true,
        position: 'top-right',
        customClass: {
          popup: 'colored-toast',
        },
        timer: 3000,
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: true,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            toast.addEventListener('click', Swal.clickConfirm)
        }
      });

      await mixinToast.fire({
        icon: icon,
        title: title
      })
    }

  }
`;
        tree.create(toastServicePath, toastServiceContent);
        return tree;
    };
}
function addProviders() {
    return (tree) => {
        var _a;
        const appModulePath = '/src/app/app.module.ts';
        const content = ((_a = tree.read(appModulePath)) === null || _a === void 0 ? void 0 : _a.toString()) || '';
        // imports y configuracion
        const ngModuleDecoratorIndex = content.indexOf('@NgModule');
        if (ngModuleDecoratorIndex == -1)
            throw new schematics_2.SchematicsException(`@NgModule not found in ${appModulePath}`);
        const imports = `import { ToastService } from './core/services/toast.service';
     import { BaseAlertService } from 'sof-shared';
     import { HTTP_INTERCEPTORS } from '@angular/common/http';
     import { ErrorInterceptor } from 'sof-shared';
    `;
        // now we update the template using the tree recorder
        const recorder = tree.beginUpdate(appModulePath);
        recorder.insertLeft(ngModuleDecoratorIndex, imports);
        //provider
        console.log('hola');
        const modulesprovidersIndex = content.indexOf('providers: [');
        if (modulesprovidersIndex == -1)
            throw new schematics_2.SchematicsException(`Cant find 'providers: [' in ${appModulePath}. Add modules import manually 'ToastService'`);
        else {
            const BaseAlertServiceProvider = `
      {
        provide: BaseAlertService,
        useClass: ToastService
      }, 
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
      },
    `;
            console.log('hola 2');
            recorder.insertRight(modulesprovidersIndex + 12, BaseAlertServiceProvider);
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}
//////////////////////////////////////////////////////////////////////////////////////
// Just return the tree
function ngAdd(options) {
    if (!options || !options.keycloakServerIp || !options.keycloakServerPort || !options.keycloakRealm || !options.keycloakClientId)
        throw new schematics_2.SchematicsException("KeyCloak configuration is invalid");
    return (0, schematics_1.chain)([
        installPackage,
        addProviders(),
        createDirectories(),
        addKeycloakJsInIndexHTML(options.keycloakServerIp, options.keycloakServerPort),
        addKeycloakConfigInAppModules(),
        addNgxTranslateConfigInAppModule(),
        addSilentCheckSsoHTML(),
        setAllowSyntheticDefaultImportsTrue(),
        addKeycloakConfigEnvironmentExample(options.keycloakServerIp, options.keycloakServerPort, options.keycloakRealm, options.keycloakClientId),
        addGlobalStyleInAngularJson("./node_modules/sof-shared/assets/style.scss"),
        addSweetAlterDefaultCustomClass(),
        addValidationDefaultErrorMessages(),
        addToastServiceAndProvider(),
        addBasei18nJson('es'),
        addBasei18nJson('en'),
        ...addLibsInPackageJson()
    ]);
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map