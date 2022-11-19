import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<BookingComponent> {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}
  
  openSnackBar() {
    this._snackBar.open('You have unsaved changes!', 'DISCARD');
  }
  
  
  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.bookingForm.pristine) 
      {
        return component.bookingForm.pristine
      } else {
        this._snackBar.open('You have unsaved changes!', 'DISCARD');
        // have to implement on children routes lets have to research.
        
        return false;
      }
  }
  
}
