import {Directive,ElementRef,Renderer} from '@angular/core'

@Directive({

    selector:'[autoGrow]',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class AutoGrowDirective{

constructor(private el: ElementRef,private render:Renderer){

}
onFocus(){
  //  alert('Yashwanth');
    this.render.setElementStyle(this.el.nativeElement,'width','800');
}
onBlur(){
    this.render.setElementStyle(this.el.nativeElement,'width','100');
}
}