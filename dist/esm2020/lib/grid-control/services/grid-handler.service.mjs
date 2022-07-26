import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GridHandlerService {
    constructor() {
        this.rowData = [];
        this.dataId = 'id';
    }
    get RowData() {
        return this.rowData;
    }
    get isSelectedRows() {
        return this.gridApi?.getSelectedNodes().length > 0;
    }
    get selectedRows() {
        return this.gridApi?.getSelectedNodes();
    }
    setConfigs(gridApiParam, rowDataParam, dataIdParam) {
        this.gridApi = gridApiParam;
        this.rowData = rowDataParam;
        this.dataId = dataIdParam;
    }
    addRow(objToAdd) {
        if (this.rowData.length > 0) {
            const indexRepeat = this.rowData.findIndex((row) => row[this.dataId] === objToAdd[this.dataId]);
            if (indexRepeat === -1)
                this.finalTransaction([...this.rowData, objToAdd]);
        }
        else {
            this.finalTransaction([...this.rowData, objToAdd]);
        }
    }
    updateRowState(obj, action, column = 'Estado') {
        const indexObj = this.rowData.findIndex((row) => row[this.dataId] === obj[this.dataId]);
        if (indexObj === -1)
            return;
        this.rowData[indexObj][column] = action;
        this.finalTransaction(this.rowData);
    }
    updateDataState(action) {
        let newRowData = this.rowData.map((row) => { return { ...row, Estado: action }; });
        this.finalTransaction(newRowData);
    }
    deleteRowsSelected() {
        if (this.selectedRows.length > 0)
            this.selectedRows.forEach((node) => {
                let newRowData = this.rowData.filter((row) => row[this.dataId] !== node.id);
                this.finalTransaction(newRowData);
            });
    }
    finalTransaction(data) {
        this.rowData = data;
        this.gridApi.setRowData(this.rowData);
        this.gridApi.redrawRows();
    }
}
GridHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GridHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridHandlerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1oYW5kbGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9zZXJ2aWNlcy9ncmlkLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sa0JBQWtCO0lBa0I3QjtRQWZRLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFRLElBQUksQ0FBQztJQWNaLENBQUM7SUFaaEIsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUlELFVBQVUsQ0FBQyxZQUFxQixFQUFFLFlBQW1CLEVBQUUsV0FBZ0I7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyRyxJQUFJLFdBQVcsS0FBSyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDLENBQUM7U0FFOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFRLEVBQUUsTUFBYyxFQUFFLFNBQWlCLFFBQVE7UUFDaEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBRSxDQUFDO1FBQzFGLElBQUcsUUFBUSxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU87UUFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZUFBZSxDQUFFLE1BQWM7UUFDN0IsSUFBSSxVQUFVLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLE9BQVEsRUFBRSxHQUFHLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUMzRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxVQUFVLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUUsSUFBVztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDOztnSEE3RFUsa0JBQWtCO29IQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR3JpZEFwaSB9IGZyb20gJ2FnLWdyaWQtY29tbXVuaXR5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWRIYW5kbGVyU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgZ3JpZEFwaSE6IEdyaWRBcGk7XHJcbiAgcHJpdmF0ZSByb3dEYXRhOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgZGF0YUlkOiBhbnkgPSAnaWQnO1xyXG5cclxuICBnZXQgUm93RGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvd0RhdGE7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTZWxlY3RlZFJvd3MoKXtcclxuICAgIHJldHVybiB0aGlzLmdyaWRBcGk/LmdldFNlbGVjdGVkTm9kZXMoKS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkUm93cygpe1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JpZEFwaT8uZ2V0U2VsZWN0ZWROb2RlcygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzZXRDb25maWdzKGdyaWRBcGlQYXJhbTogR3JpZEFwaSwgcm93RGF0YVBhcmFtOiBhbnlbXSwgZGF0YUlkUGFyYW06IGFueSkge1xyXG4gICAgdGhpcy5ncmlkQXBpID0gZ3JpZEFwaVBhcmFtO1xyXG4gICAgdGhpcy5yb3dEYXRhID0gcm93RGF0YVBhcmFtO1xyXG4gICAgdGhpcy5kYXRhSWQgPSBkYXRhSWRQYXJhbTtcclxuICB9XHJcblxyXG4gIGFkZFJvdyhvYmpUb0FkZDogYW55KXtcclxuICAgIGlmICh0aGlzLnJvd0RhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBpbmRleFJlcGVhdCA9IHRoaXMucm93RGF0YS5maW5kSW5kZXgoKHJvdzogYW55KSA9PiByb3dbdGhpcy5kYXRhSWRdID09PSBvYmpUb0FkZFt0aGlzLmRhdGFJZF0pO1xyXG4gICAgICBpZiAoaW5kZXhSZXBlYXQgPT09IC0xKSB0aGlzLmZpbmFsVHJhbnNhY3Rpb24oWyAuLi50aGlzLnJvd0RhdGEsIG9ialRvQWRkIF0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmluYWxUcmFuc2FjdGlvbihbIC4uLnRoaXMucm93RGF0YSwgb2JqVG9BZGQgXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSb3dTdGF0ZShvYmo6IGFueSwgYWN0aW9uOiBzdHJpbmcsIGNvbHVtbjogc3RyaW5nID0gJ0VzdGFkbycpe1xyXG4gICAgY29uc3QgaW5kZXhPYmogPSB0aGlzLnJvd0RhdGEuZmluZEluZGV4KCAocm93KSA9PiByb3dbdGhpcy5kYXRhSWRdID09PSBvYmpbdGhpcy5kYXRhSWRdICk7XHJcbiAgICBpZihpbmRleE9iaiA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJvd0RhdGFbaW5kZXhPYmpdW2NvbHVtbl0gPSBhY3Rpb247XHJcbiAgICB0aGlzLmZpbmFsVHJhbnNhY3Rpb24odGhpcy5yb3dEYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURhdGFTdGF0ZSggYWN0aW9uOiBzdHJpbmcgKXtcclxuICAgIGxldCBuZXdSb3dEYXRhOiBhbnlbXSA9IHRoaXMucm93RGF0YS5tYXAoKHJvdykgPT4geyByZXR1cm4gIHsgLi4ucm93LCBFc3RhZG86IGFjdGlvbiB9IH0gKTtcclxuICAgIHRoaXMuZmluYWxUcmFuc2FjdGlvbihuZXdSb3dEYXRhKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVJvd3NTZWxlY3RlZCgpIHtcclxuICAgIGlmKHRoaXMuc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDApIFxyXG4gICAgdGhpcy5zZWxlY3RlZFJvd3MuZm9yRWFjaCggKG5vZGU6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgbmV3Um93RGF0YTogYW55W10gPSB0aGlzLnJvd0RhdGEuZmlsdGVyKChyb3cpID0+IHJvd1t0aGlzLmRhdGFJZF0gIT09IG5vZGUuaWQpO1xyXG4gICAgICB0aGlzLmZpbmFsVHJhbnNhY3Rpb24obmV3Um93RGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbmFsVHJhbnNhY3Rpb24oIGRhdGE6IGFueVtdICl7XHJcbiAgICB0aGlzLnJvd0RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5ncmlkQXBpLnNldFJvd0RhdGEodGhpcy5yb3dEYXRhKTtcclxuICAgIHRoaXMuZ3JpZEFwaS5yZWRyYXdSb3dzKCk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==