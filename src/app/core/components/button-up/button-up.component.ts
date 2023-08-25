import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.scss']
})
export class ButtonUpComponent {

  showButton: boolean = false;
  scrollHeight: number = 500;
  constructor(@Inject(DOCUMENT) private document: Document){}

  @HostListener('window:scroll')
  onWindowScroll(){
    const scrollY = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;

    this.showButton = (scrollY || scrollTop) > this.scrollHeight;
  }


  onScrollTop(){
    scroll(0,0)
  }
}
