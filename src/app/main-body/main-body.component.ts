import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainBodyComponent {
  OnClick(eventData : any) {
    const top = document.getElementById('top');
    top?.scrollIntoView({behavior: 'smooth'})
  }
}
