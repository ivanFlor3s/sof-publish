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
function addKeycloakConfigInAppModules(keycloakServerIp, keycloakServerPort, realm, clientId) {
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
        const ngModuleDecoratorIndex = content.indexOf('@NgModule');
        if (ngModuleDecoratorIndex == -1)
            throw new schematics_2.SchematicsException(`@NgModule not found in ${appModulePath}`);
        const keycloakConfig = `//ToDo poner el import de keycloak

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://${keycloakServerIp}:${keycloakServerPort}/auth',
        realm: '${realm}',
        clientId: '${clientId}'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}
    
`;
        // now we update the template using the tree recorder
        const recorder = tree.beginUpdate(appModulePath);
        recorder.insertLeft(ngModuleDecoratorIndex, keycloakConfig);
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
        pushWhenPossible(optionsBuildJson['styles'], globalStylePath, 'Global style path not added in build  because the referene already exists', context);
        //EN TEST
        var optionsTestJson = json['projects'][project]['architect']['test']['options'];
        pushWhenPossible(optionsTestJson['styles'], globalStylePath, 'Global style path not added in test  because the referene already exists', context);
        tree.overwrite(angularJsonPath, JSON.stringify(json, null, 2));
        return;
    });
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
        const content = (_a = tree.read(tsConfigJsonPath)) === null || _a === void 0 ? void 0 : _a.toString();
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
            throw new schematics_2.SchematicsException(`${environmentPath} already exists. Skipping`);
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
//////////////////////////////////////////////////////////////////////////////////////
// Just return the tree
function ngAdd(options) {
    if (!options || !options.keycloakServerIp || !options.keycloakServerPort || !options.keycloakRealm || !options.keycloakClientId)
        throw new schematics_2.SchematicsException("KeyCloak configuration is invalid");
    // else
    //   // ToDo: Se podria validar la ip con https://www.npmjs.com/package/is-ip
    return (0, schematics_1.chain)([
        installPackage,
        addKeycloakJsInIndexHTML(options.keycloakServerIp, options.keycloakServerPort),
        addKeycloakConfigInAppModules(options.keycloakServerIp, options.keycloakServerPort, options.keycloakRealm, options.keycloakClientId),
        addSilentCheckSsoHTML(),
        setAllowSyntheticDefaultImportsTrue(),
        addKeycloakConfigEnvironmentExample(options.keycloakServerIp, options.keycloakServerPort, options.keycloakRealm, options.keycloakClientId),
        addGlobalStyleInAngularJson("./node_modules/sof-shared/assets/style.scss")
    ]);
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map