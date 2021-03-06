// import { Directive,ElementRef,HostListener } from '@angular/core';

// @Directive({
//   selector: '[appHighlightQuote]'
// })
// export class HighlightQuoteDirective {

//   constructor(private elem: ElementRef) { }
//   @HostListener("click") onClicks() {
//     this.textDeco("green")
//   }

// }

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQoute]'
})
export class HighlightQouteDirective {

  constructor(private elem: ElementRef) { 

  }
  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClicks(): void{
    this.textDeco("none")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }

}
