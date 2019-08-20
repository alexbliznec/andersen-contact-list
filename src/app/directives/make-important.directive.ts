import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeImportant]'
})
export class MakeImportantDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    this.element.nativeElement.style.flexOrder = 1;
  }
}
