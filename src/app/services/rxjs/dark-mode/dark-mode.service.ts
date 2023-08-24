import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
/**
 * @description
 * A service for managing and sharing a change state Dark mode theme.
 *
 * @publicApi
 */
@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  /**
   * An observable that emits changes to the boolean state.
   */
  private darkModeSubject = new BehaviorSubject<boolean>(false);

  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  /**
   * Set change state dark mode theme.
   *
   * @param {boolean} newState - darkMode true or false?.
   */
  darkModeSet(newState: boolean): void {
    this.darkModeSubject.next(newState);
  }
}
