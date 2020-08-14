import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContactComponent } from '../../../pages/contact/contact.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<ContactComponent> {

  constructor() { }
  canDeactivate(component: ContactComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
                  console.log('component.locations ', component.locations);
                  console.log('!!component.locations ', !!component.locations);
                  console.log('!component.locations ', !component.locations);

    return !!component.locations; // jesli jest coś w polu locations można będzie przełączać się na inne komponenty
  }
}
