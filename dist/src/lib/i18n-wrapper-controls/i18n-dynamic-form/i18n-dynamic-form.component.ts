import { Component, EventEmitter , AfterViewInit, Input, Output, ChangeDetectorRef, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DynFormComponent, FormConfig, FormFieldConfig, FormularioService, Emptyfield, FormConfigTypes } from 'sof-ng-controls';
import { i18nDynamicFormConfig, i18nFormFieldsConfig } from './DynamicFormConfig';

@Component({
  selector: 'lib-i18n-dynamic-form',
  templateUrl: './i18n-dynamic-form.component.html',
  styleUrls: ['./i18n-dynamic-form.component.css'],
  providers: [ FormularioService ]
})
export class I18nDynamicFormComponent implements AfterViewInit, OnDestroy, OnChanges {
  
  // fieldsP: FormFieldConfig[] = []
  @Input() cols: number = 2;
  enum = FormConfigTypes;
  valueChanges!: Subscription;
  @Input() gutterSize: string = '1em';
  @Input() rowHeight: string = '130px'
  @Input() fields!: i18nFormFieldsConfig[]; 
  @Input() FieldsValues: any;
  @Output() submitEvent: EventEmitter<any>= new EventEmitter()
  @Output() onChangeEvent: EventEmitter<any>= new EventEmitter()
  @Input() formConfig: FormConfig = {
    formCustomClass: '',
    submitButtonConfig:{
      text:'SUBMIT',
      color:'primary',
      hidden: false,
      materialButtonType:'raised'
    }
  }

  forma!: FormGroup;

  constructor(private cdRef: ChangeDetectorRef, private fs: FormularioService) {
  }

  get FormValues(){
    return this.forma.value
  }

  ngOnInit(): void {
    this.getRowHeight();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( !!changes['FieldsValues'] && changes['FieldsValues'].previousValue != changes['FieldsValues'].currentValue ) {
      this.SetValues()
    }
  }
  private SetValues() {
    if (!!this.forma)
      Object.keys( this.FieldsValues ).forEach( key => {
        this.forma.get(key)?.setValue( this.FieldsValues[key])
      })
  }
  
  ngAfterViewInit() {
    this.forma = this.fs.buildFormGroup(this.fields as any);
    this.valueChanges = this.forma.valueChanges.subscribe( v => {
      this.onChangeEvent.emit( this.forma.value )
    })
    if (!!this.FieldsValues)
      this.SetValues();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.valueChanges.unsubscribe();
    this.fs.ngOnDestroy()
  }

  OnSubmit(){
    console.log(this.forma)
    this.forma.markAllAsTouched()
    this.submitEvent.emit(this.FormValues)
  }

  getRowHeight() {
    var matchesNumber = this.rowHeight.match(/(\d+)/);
    let matchesString = this.rowHeight.replace(/[0-9]/g, '');
    this.rowHeight = (Number((matchesNumber as any)[0]) / 5 ).toString() + matchesString
    console.log(this.rowHeight)
    return this.rowHeight;
  }

}
