import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/rxjs/search/search.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  name = '';

  constructor(private search: SearchService){
    this.search.search$.subscribe((state) => {
      this.name = state.name;
    });

  }

  select(value: string = 'All'){
    this.search.searchSet({ name: this.name, status: value });
  }
}
