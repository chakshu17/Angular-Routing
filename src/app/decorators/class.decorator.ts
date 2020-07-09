
export function Sticker(configuration) {
  // target.prototype.stickers = ['Github','Google','Kaizer'];
  return function (target) {
    target.prototype.stickers = configuration.stickers;
  };
}
export function HookLogger(configuration?) {
  return function(target){

    const componentName= target.name;
    const defaulthooks:string[]= [
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentInChecked',
      'ngAfterViewInit',
      'ngAfterViewInChecked',
      'ngOnDestroy'
    ];

    let hookstobelogged = (configuration && configuration.hooks) || defaulthooks;

    hookstobelogged.forEach(hooktobelogged => {
        const original = target.prototype[hooktobelogged];
        target.prototype[hooktobelogged] = function(...args){
          console.log(`component name: ${componentName } |  Hooks name: ${hooktobelogged} |`, ...args);
          original && original.apply(this,args);
        }
    });

  }
}

export function Readonly(value){
  return function(target,key){
    Object.defineProperty(target,key,{
      set: () => target.key = value,
      get: () => value,
      configurable:false
    });
  }
}
