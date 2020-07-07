import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appChangeCase]',
})
export class ChangeCaseDirective {

  @Input('appChangeCase') case: string;

  @HostListener('blur') onblur() {
    // to convert the value of input to lower case if user click elsewhere using renderer
    // let changedvalue: string = this.elRef.nativeElement.value.toLowerCase();
    // this.renderer.setProperty(this.elRef.nativeElement,'value',changedvalue);

    // to convert the value of input to upper case if user click elsewhere
    // this.elRef.nativeElement.value = this.elRef.nativeElement.value.toUpperCase();

    let changedvalue: string =
      this.case === 'upper'
        ? this.elRef.nativeElement.value.toUpperCase()
        : this.elRef.nativeElement.value.toLowerCase();
    this.renderer.setProperty(this.elRef.nativeElement, 'value', changedvalue);
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.elRef.nativeElement.value);
  }
}
