import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class IntegerInputDirective {
    constructor() {
        this.ignoreSpaces = true;
        this.allowedKeyCodes = [
            13,
            8,
            46,
            9,
            35,
            36,
            37,
            39,
            17, //Ctrl
        ];
    }
    validInputCode(code) {
        return this.allowedKeyCodes.indexOf(code) != -1;
    }
    isPasteEvent(event) {
        return event.ctrlKey && event.key == "v";
    }
    //Can be deleted since keydown is triggered before
    onKeypress(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.key) && !this.validInputCode(event.which ? event.which : event.keyCode) && !this.isPasteEvent(event)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    //Can be deleted since keydown is triggered before
    onKeyup(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.key) && !this.validInputCode(event.which ? event.which : event.keyCode) && !this.isPasteEvent(event)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    onKeydown(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.key) && !this.validInputCode(event.which ? event.which : event.keyCode) && !this.isPasteEvent(event)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    //Can be deleted since keydown is triggered before
    onInput(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.data)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    //Can be deleted since keydown is triggered before
    onIonChange(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '');
    }
    onPaste(event) {
        const notNumbers = /[^0-9]/;
        let input = event.clipboardData.getData('text');
        if (this.ignoreSpaces)
            input = input.replaceAll(' ', '');
        if (notNumbers.test(input)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    onDrop(event) {
        const notNumbers = /[^0-9]/;
        let input = event.dataTransfer.getData("text");
        if (this.ignoreSpaces)
            input = input.replaceAll(' ', '');
        if (notNumbers.test(input)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
}
IntegerInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: IntegerInputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IntegerInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.3", type: IntegerInputDirective, selector: "[IntegerInput]", inputs: { ignoreSpaces: "ignoreSpaces" }, host: { listeners: { "keypress": "onKeypress($event)", "keyup": "onKeyup($event)", "keydown": "onKeydown($event)", "input": "onInput($event)", "ionChange": "onIonChange($event)", "paste": "onPaste($event)", "drop": "onDrop($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: IntegerInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[IntegerInput]',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { ignoreSpaces: [{
                type: Input
            }], onKeypress: [{
                type: HostListener,
                args: ['keypress', ['$event']]
            }], onKeyup: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }], onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }], onIonChange: [{
                type: HostListener,
                args: ['ionChange', ['$event']]
            }], onPaste: [{
                type: HostListener,
                args: ['paste', ['$event']]
            }], onDrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdlci1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2RpcmVjdGl2ZXMvSW50ZWdlci1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUsvRCxNQUFNLE9BQU8scUJBQXFCO0lBZWhDO1FBYlMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBYTtZQUNsQyxFQUFFO1lBQ0YsQ0FBQztZQUNELEVBQUU7WUFDRixDQUFDO1lBQ0QsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUUsRUFBRSxNQUFNO1NBQ1gsQ0FBQTtJQUVlLENBQUM7SUFFVCxjQUFjLENBQUMsSUFBUztRQUM5QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxZQUFZLENBQUMsS0FBVTtRQUM3QixPQUFPLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDM0MsQ0FBQztJQUVELGtEQUFrRDtJQUVsRCxVQUFVLENBQUMsS0FBVTtRQUNuQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZ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QUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2tIQWxIVSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzBFQUdVLFlBQVk7c0JBQXBCLEtBQUs7Z0JBeUJOLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBY3BDLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBYWpDLFNBQVM7c0JBRFIsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBY25DLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBY2pDLFdBQVc7c0JBRFYsWUFBWTt1QkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBTXJDLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBa0JqQyxNQUFNO3NCQURMLFlBQVk7dUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tJbnRlZ2VySW5wdXRdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEludGVnZXJJbnB1dERpcmVjdGl2ZSAge1xyXG4gIFxyXG4gIEBJbnB1dCgpIGlnbm9yZVNwYWNlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHJpdmF0ZSBhbGxvd2VkS2V5Q29kZXM6IG51bWJlcltdID0gW1xyXG4gICAgMTMsIC8vRW50ZXIgXHJcbiAgICA4LCAgLy9CYWNrc3BhY2VcclxuICAgIDQ2LCAvL0RlbGV0ZVxyXG4gICAgOSwgIC8vVGFiXHJcbiAgICAzNSwgLy9FbmRcclxuICAgIDM2LCAvL0hvbWVcclxuICAgIDM3LCAvL0xlZnRcclxuICAgIDM5LCAvL1JpZ2h0XHJcbiAgICAxNywgLy9DdHJsXHJcbiAgXVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkSW5wdXRDb2RlKGNvZGU6IGFueSkgOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmFsbG93ZWRLZXlDb2Rlcy5pbmRleE9mKGNvZGUpICE9IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Bhc3RlRXZlbnQoZXZlbnQ6IGFueSkgOiBib29sZWFuIHtcclxuICAgIHJldHVybiBldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PSBcInZcIjtcclxuICB9XHJcblxyXG4gIC8vQ2FuIGJlIGRlbGV0ZWQgc2luY2Uga2V5ZG93biBpcyB0cmlnZ2VyZWQgYmVmb3JlXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5cHJlc3MnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5cHJlc3MoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3Qgbm90TnVtYmVycyA9IC9bXjAtOV0vO1xyXG4gICAgaWYgKG5vdE51bWJlcnMudGVzdChldmVudC5rZXkpICYmICF0aGlzLnZhbGlkSW5wdXRDb2RlKGV2ZW50LndoaWNoID8gZXZlbnQud2hpY2ggOiBldmVudC5rZXlDb2RlKSAmJiAhdGhpcy5pc1Bhc3RlRXZlbnQoZXZlbnQpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy9DYW4gYmUgZGVsZXRlZCBzaW5jZSBrZXlkb3duIGlzIHRyaWdnZXJlZCBiZWZvcmVcclxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25LZXl1cChldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBub3ROdW1iZXJzID0gL1teMC05XS87XHJcbiAgICBpZiAobm90TnVtYmVycy50ZXN0KGV2ZW50LmtleSkgJiYgIXRoaXMudmFsaWRJbnB1dENvZGUoZXZlbnQud2hpY2ggPyBldmVudC53aGljaCA6IGV2ZW50LmtleUNvZGUpICYmICF0aGlzLmlzUGFzdGVFdmVudChldmVudCkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleWRvd24oZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3Qgbm90TnVtYmVycyA9IC9bXjAtOV0vO1xyXG4gICAgaWYgKG5vdE51bWJlcnMudGVzdChldmVudC5rZXkpICYmICF0aGlzLnZhbGlkSW5wdXRDb2RlKGV2ZW50LndoaWNoID8gZXZlbnQud2hpY2ggOiBldmVudC5rZXlDb2RlKSAmJiAhdGhpcy5pc1Bhc3RlRXZlbnQoZXZlbnQpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy9DYW4gYmUgZGVsZXRlZCBzaW5jZSBrZXlkb3duIGlzIHRyaWdnZXJlZCBiZWZvcmVcclxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXHJcbiAgb25JbnB1dChldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBub3ROdW1iZXJzID0gL1teMC05XS87XHJcbiAgICBpZiAobm90TnVtYmVycy50ZXN0KGV2ZW50LmRhdGEpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy9DYW4gYmUgZGVsZXRlZCBzaW5jZSBrZXlkb3duIGlzIHRyaWdnZXJlZCBiZWZvcmVcclxuICBASG9zdExpc3RlbmVyKCdpb25DaGFuZ2UnLCBbJyRldmVudCddKVxyXG4gIG9uSW9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCcnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcclxuICBvblBhc3RlKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IG5vdE51bWJlcnMgPSAvW14wLTldLztcclxuICAgIGxldCBpbnB1dCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpO1xyXG5cclxuICAgIGlmICh0aGlzLmlnbm9yZVNwYWNlcylcclxuICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKCcgJywgJycpO1xyXG5cclxuICAgIGlmIChub3ROdW1iZXJzLnRlc3QoaW5wdXQpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgb25Ecm9wKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IG5vdE51bWJlcnMgPSAvW14wLTldLztcclxuICAgIGxldCBpbnB1dCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5pZ25vcmVTcGFjZXMpXHJcbiAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgnICcsICcnKTtcclxuICAgIFxyXG4gICAgaWYgKG5vdE51bWJlcnMudGVzdChpbnB1dCkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxufSJdfQ==