import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[focusref]'
  })
  export class FocusedDirective {
    focus = false;
  
    @HostListener("focus")
    onFocus() {
      console.log("focus")
      this.focus = true;
    }
  
    @HostListener("blur")
    onBlur() {
      console.log("blur")
      this.focus = false;
    }
  }