import { Component, ViewChild, Input, Self, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CheckboxGroupMaterialControlComponent } from 'sof-ng-controls';
import { FormGroup, NgControl } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n-checkbox-group-control',
  templateUrl: './i18n-checkbox-group-control.component.html'
})
export class I18nCheckboxGroupControlComponent extends CheckboxGroupMaterialControlComponent implements OnInit, AfterViewInit, OnChanges {
  
  @ViewChild(CheckboxGroupMaterialControlComponent)
  control!: CheckboxGroupMaterialControlComponent;

  checkOptions: {text:string, value:any}[] = []

  @Input() labelToTranslate!: string;

  @Input() listToTranslate!: any[] 

  constructor(@Self() public override controlDir: NgControl,
    protected pipeTranslate: TranslatePipe,
    public _srvTranslatePipe: TranslateService
  ){
    super(controlDir)
  }
  
  ngOnInit(): void {
    this.translateOptions();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes && this.listToTranslate) this.translateOptions();
  }

  translateOptions(){
    this.checkOptions = this.listToTranslate.map(x => {
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
    return this.controlDir.control?.parent as FormGroup|| new FormGroup({});
  }

}
