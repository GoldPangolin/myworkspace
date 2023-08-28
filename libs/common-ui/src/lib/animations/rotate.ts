import { animate, state, style, transition, trigger } from "@angular/animations";

export const rotateAnimation = trigger('rotate', [
    state('0', style({ transform: 'rotate(0deg)' })),
    transition('* => *', [
      animate('{{duration}}ms', style({ transform: 'rotate({{degrees}}deg)' }))
    ], { params: { degrees: 0, duration: 300 } })
  ]);