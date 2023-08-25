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
export class SearchService {
  /**
   * An observable that emits changes to the boolean state.
   */
  private searchSubject = new BehaviorSubject<string>('');

  search$: Observable<string> = this.searchSubject.asObservable();

  /**
   * Set change state dark mode theme.
   *
   * @param {FilterCharacter} newState - darkMode true or false?.
   */
  searchSet(newState: string): void {
    this.searchSubject.next(newState);
  }
}
