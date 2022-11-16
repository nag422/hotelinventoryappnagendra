import { DOCUMENT } from '@angular/common';
import { OnInit, Directive, ElementRef, Inject, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  color: string = 'red';
  bgcolor: string = 'lightgrey';
  @Input() ipcolor: string = 'blue';
  @Input() appHover: string = 'blue';

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { 
    console.log(this.element.nativeElement);
   }
   ngOnInit(): void {
     this.element.nativeElement.style.color = this.color;
     const elem = this.document.querySelector("input.email");
     const elem2 = this.document.querySelector("input.password");
     elem?.setAttribute("style","color:yellow; cursor:pointer");
    //  Can also use this.element.nativeElement instead of elem2
     this.renderer.setStyle(elem2,
      'backgroundColor',
      this.bgcolor)
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement,
      'backgroundColor',
      this.ipcolor);
      const elem3 = this.document.querySelector("input.company");
      this.renderer.setStyle(elem3,
        'backgroundColor',
        this.appHover)
      
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement,
      'backgroundColor',
      this.ipcolor)
   }

}
