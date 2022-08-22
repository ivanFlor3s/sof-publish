import { AfterViewInit, Component, ViewChild, Input, Self, OnInit, Optional } from '@angular/core';
import { RadioButtonMaterialControlComponent } from 'sof-ng-controls';
import { RadioButtonControlComponent } from 'sof-ng-controls/lib/base/radio-button-control/radio-button-control.component';
import { FormControl, FormGroup, NgControl } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n-radio-button',
  templateUrl: './i18n-radio-button.component.html'
})
export class I18nRadioButtonComponent extends RadioButtonMaterialControlComponent implements AfterViewInit, OnInit {

  @ViewChild(RadioButtonMaterialControlComponent)
  control!: RadioButtonMaterialControlComponent;

  radioOptions: {text:string, value:any}[] = []

  @Input() labelToTranslate!: string;

  @Input()listToTranslate!: any[] 
  // = [ {text:'FORM.RADIOTEXT1', value:1},{text: 'FORM.RADIOTEXT2', value: 2}]

  constructor(@Optional() @Self() public override controlDir: NgControl,
    protected pipeTranslate: TranslatePipe,
    public _srvTranslatePipe: TranslateService
  ){
    super(controlDir)
  }
  
  ngOnInit(): void {
    this.translateOptions();
  }

  translateOptions(){
    this.radioOptions = this.listToTranslate.map(x => {
      return {
        text: this.pipeTranslate.transform(this.getText(x)) ,
        value: this.getValue(x)
      } 
    }) 
  }

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };

    this._srvTranslatePipe.onLangChange.subscribe( () => {
      this.translateOptions()
    });
  }

  getFbGroup(): FormGroup  {
    return this.controlDir?.control?.parent as FormGroup|| new FormGroup({ 'none': new FormControl() });
  }

  
  

}
