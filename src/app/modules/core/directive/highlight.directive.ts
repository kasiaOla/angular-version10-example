import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[highlightDirective]'
})

// [] nawiasy mówią, że to deryktywa atrybutowa
// w dekoratorze jest zawsze selektor
export class HighlightDirective {

  constructor(private elementHtml: ElementRef) {}

  // dekorator elementHtml
  @HostListener('mouseenter')
  hoverHighlight(): void {
    this.elementHtml.nativeElement.style.backgroundColor = '#a9c4e0';
  }

  @HostListener('mouseleave')
  cancelhighlight(): void {
    this.elementHtml.nativeElement.style.backgroundColor = null;
  }
}
