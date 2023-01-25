import {
  Directive,
  HostListener,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[dropdownDirective]',
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
