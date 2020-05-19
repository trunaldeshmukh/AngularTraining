import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from 'src/app/services/app.http.service';
import { ProductData } from 'src/app/models/app.product';

// Directive properties
// selector: the custom attribute name that will be applied on
// UI element. If the attribute is used for property binding then
// the selector will have proprty binding syntax [<SELECTOR-NAME>]

// use the following classes for HTML Element Reference and the Rendering
// ElementRef: Class to refer HTML element to apply directive
// Renderer2 : Class to define rendering based on the directive

@Directive({
    selector: '[uniqueProductId]'
})
export class UniqueProductIdDirective {
    products: Array<ProductData> = [];
    constructor(private ele: ElementRef, private renderer: Renderer2, private httpService: HttpService) {
        this.httpService.get().subscribe((data) => {
            this.products = data;
        }, (error) => {
            console.log(`error in response ${error}`);
        });
    }

    // define input property for the directive that will accept data
    // from HTML element using Property Binding
    // IMP** --> This property must map with directive selector
    // e.g. <div [setColor]="<value>"></div>

    @Input('uniqueProductId') productId: string;

    // logic for directive
    private applyColor(color: string): void {
        this.renderer.setStyle(this.ele.nativeElement,
            'border-color',
            color);
        this.renderer.setStyle(this.ele.nativeElement,
            'background-color',
            color);
    }

    // host events inside the directive those will cause the
    // directive to be executed / activated and its logic to execute

    @HostListener('blur')
    onBlur(): void {
        if (this.products && this.products.length > 0) {
            if (this.products.map(m => m.ProductId.toLowerCase()).includes(this.productId.toLowerCase())) {
                this.applyColor('indianred');
                console.log('custom directive set border red');
            } else {
                this.applyColor('greenyellow');
                console.log('custom directive set border green');
            }
        }
    }
}
