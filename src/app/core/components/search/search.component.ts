import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchService } from 'src/app/services/rxjs/search/search.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  status: string = '';
  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Morty' }, { name: 'Rick' }, { name: 'Summer' }];
  filteredOptions?: Observable<User[]>;

  constructor(private search: SearchService) {
    this.search.search$.subscribe((state) => {
      this.status = state.status as string;
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        this.search.searchSet({ name: name as string, status: this.status});
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
