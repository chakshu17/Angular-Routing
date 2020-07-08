import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>, //what is going to show -> reference
    private vcRef: ViewContainerRef //where it is going to shown
  ) {}

  @Input() set appUnless(condition) {
    condition
      ? this.vcRef.clear()//to not show o/p when value is true in directive component in div of appunless
      : this.vcRef.createEmbeddedView(this.templateRef);//to show o/p when value is false in directive component in div of appunless
  }
}
