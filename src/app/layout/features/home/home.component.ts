import { Component } from '@angular/core';
import { FilterCharacter } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  query: FilterCharacter = {
    name: '',
  };


  ngOnInit(): void {
    scrollTo(0,0)
  }
  searchQuery(value: string) {
    if(value){
      this.query.name = value;
    } else{
      this.query.name = '';
    }
  }
}
