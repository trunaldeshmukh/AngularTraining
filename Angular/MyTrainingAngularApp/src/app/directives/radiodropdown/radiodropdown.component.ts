import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-my-radio-dropdown',
    template: `<div *ngFor='let value of values'><input type="radio"
   (change)="categorySelected($event.target)" name="category" value={{value}}>&nbsp; {{value}}</div>`,
})
export class RadioDropDownComponent implements OnInit {
    constructor() { }
    @Input() values: Array<string>;
    @Output() valueEmit = new EventEmitter<string>();
    ngOnInit(): void { }
    categorySelected(elem: any) {
        this.valueEmit.emit(elem.value);
    }
}
