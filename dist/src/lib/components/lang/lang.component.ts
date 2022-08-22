import { AfterViewInit, Component, Inject, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { I18nOptions } from '../../shared/models/options';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent extends I18nOptions {

  public activedLang = 'es';

  constructor( 
    public translate: TranslateService,
    @Self() public override controlDir: NgControl,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    protected override pipeTranslate: TranslatePipe,
  ) {
    super(controlDir, pipeTranslate, translate );

    translate.addLangs(['es', 'en']);
    translate.setDefaultLang(this.activedLang);

    const browserLang: any = translate.getBrowserLang();
    translate.use( browserLang.match(/es|en/) ? browserLang : this.activedLang);
  }

  changeLang(lang: any){
    this.activedLang = lang;
    this.translate.use(lang);


    //DatePicker
    this._locale = lang;
    this._adapter.setLocale(this._locale);
  }

}
