import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() clicked = true;
  @Output() clickedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick(event: any) {
    this.clicked = !this.clicked;
  }

}
