import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onMouseClick(e: MouseEvent) {
    const popupHeight = 0;
    const popupWidth = 0;
    console.log(e);

    let popupXPosition, popupYPosition;

    if (e.clientX + popupWidth > window.innerWidth) {
      popupXPosition = e.pageX - popupWidth;
    } else {
      popupXPosition = e.pageX;
    }

    if (e.clientY + popupHeight > window.innerHeight) {
      popupYPosition = e.pageY - popupHeight;
    } else {
      popupYPosition = e.pageY;
    }
  }
}
