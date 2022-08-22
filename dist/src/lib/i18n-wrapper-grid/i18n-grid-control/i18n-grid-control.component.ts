import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { Subscription, lastValueFrom } from 'rxjs';
import { GridControlComponent } from 'sof-ng-controls';


@Component({
  selector: 'app-i18n-grid-control',
  templateUrl: './i18n-grid-control.component.html',
  styleUrls: ['./i18n-grid-control.component.scss'],
})
export class I18nGridControlComponent implements OnInit {
  private listenerToLangChange$!: Subscription;

  @Output() onGridApi: EventEmitter<GridApi> = new EventEmitter<GridApi>();
  @Output() pageChangeEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>() 

  @Input() i18nRowId!: any;
  @Input() onMemorySearch: boolean = true;
  @Input() totalItems: number;
  @ViewChild(GridControlComponent) gridControl!: GridControlComponent;

  //Pasamanos de params al componente GRID CONTROL
  /**
   *
   */
  /**
   * @summary Array de datos en la fila
   * @example ```ts
   * [
     {
        Convenio: 'Accord Salud',
        Financiador: 'Accord Salid',
        Estado: 'Suspendido',
      },
      {
        Convenio: 'Accord Salud',
        Financiador: 'Accord Salid',
        Estado: 'Inactivo',
      },
      {
        Convenio: 'Accord Salud',
        Financiador: 'Accord Salid',
        Estado: 'Activo',
      }]
      ```
   */
  @Input() i18nGridRowData!: any[] | null;

  /**
   * Array con las configuracion de cada columna en la grilla
   */
  @Input() i18nGridColDefsRaw!: ColDef[];
  @Input() i18nGridPaginationPageSize: number = 10;
  @Input() i18nGridPagination: boolean = true;
  /**
   * @summary gridRowSelection indica el tipo de seleccion en la grilla
   * @param single solo se puede seleccionar una fila a la vez
   * @param multiple se pueden seleccionar varias filas
   */
  @Input() i18nGridRowSelection: 'single' | 'multiple' = 'single';
  /**
   * Animacion de las filas en ordenamiento
   */
  @Input() i18nGridAnimateRows: boolean = false;
  /**
   * En caso de que sea verdadera se encarga de mostrar el campo de page size editable,
   * caso contrario esconde el campo
   */
  @Input() i18nGridPageSizeEditable: boolean = true;
  /**
   * Texto que se muestra como label el input pageSize
   */
  @Input() i18nGridPageSizeText: string = 'Paginas por fila';
  /**
   * En caso de que sea verdadero va a mostrar los checkboxes en la primer columna
   * caso contrario no se van a agregar las checkboxes
   */
  @Input() i18nGridCheckboxesToSelection: boolean = false;

  /**
   * @summary funcion que devuelve si muestra u oculta el checkbox de seleccion la cada fila
   * @param rowNode la fila de la grilla. rowNode.data es el item de la fila del array que se le pasa a la grilla
   * @example [isRoqSelectableFn]="selectableFn" //Si es necesario '...="selectableFn.bind(this)"'
   * @example selectableFn(rowNode: RowNode): boolean { return rowNode.data?.convId == 'J10'; }
   */
   @Input() isRowSelectableFn?: (rowNode: any) => boolean;


  get PageSizeText() {
    return this.pipeTranslate.transform(this.i18nGridPageSizeText) || '';
  }

  constructor(
    protected pipeTranslate: TranslatePipe,
    public _srvTranslatePipe: TranslateService
  ) {}

  ngOnInit(): void {
    this.changeLocaleOnLangeChanged();
    this.transformLocale();
  }

  ngAfterViewInit(): void {
    this.transformI18nColumnRaws();
  }

  changeLocaleOnLangeChanged() {
    this.listenerToLangChange$ = this._srvTranslatePipe.onLangChange.subscribe(
      (res) => {
        this.transformLocale();
        this.transformI18nColumnRaws();
      }
    );
  }

  async transformLocale() {
    //Extraigo las variables para mandar al localeText de la grilla

    const { of, to, page, noRowsToShow } = await lastValueFrom(
      this._srvTranslatePipe.get('GRID')
    );


    if (!of || !to || !page || !noRowsToShow) {
      throw new Error(
        'No estan definidas las traducciones para las opciones de la grilla'
      );
    }
    this.gridControl.localeText = { of, to, page, noRowsToShow };
    this.gridControl.doRerender();
  }

  async transformI18nColumnRaws() {
    //To promise deprecated => Reemplazo con "lastValueFrom"
    //https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated

    //Espero a tener las traducciones
    await lastValueFrom(this._srvTranslatePipe.get('GRID'));

    //Recorro columnas para setearles la funcion que va a devolver la traduccion
    const columnDefs: ColDef[] = this.i18nGridColDefsRaw.map((x: ColDef) => {
      x.headerValueGetter = () => {
        const translate = this.pipeTranslate.transform(x.headerName as string);
        return translate;
      };

      return x;
    });

    //Seteo columnas en GridControl
    this.gridControl.gridColDefsRaw = columnDefs;

    //Normalizo las colDefs que pase
    this.gridControl.transformColumnRaws();
  }

  ngOnDestroy(): void {
    this.listenerToLangChange$.unsubscribe();
  }

}
