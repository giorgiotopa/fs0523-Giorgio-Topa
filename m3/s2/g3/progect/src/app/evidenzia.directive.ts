import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {

  constructor(
    private ref:ElementRef
  ) {}

  ngOnInit(){
    this.ref.nativeElement.style.backgroundColor = '#D3135A'
  }
}
