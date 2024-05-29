import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Page1 <=> Page2', [
            style({ opacity: 0 }),
            animate('500ms ease-in-out', style({ opacity: 1 }))
        ]),
    ]);