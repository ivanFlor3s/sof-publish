import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialControlsModule } from 'sof-ng-controls';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    MaterialControlsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatLuxonDateModule,
    TranslateModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    MaterialControlsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatLuxonDateModule,
    TranslateModule,
    HttpClientModule
  ]
})
export class SharedModule { }