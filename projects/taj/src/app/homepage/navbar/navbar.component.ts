import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  @Input() navtitle!: string;
  @Output() navtitleChange = new EventEmitter<string>();
  ngOnInit(): void {
  }

  navtitleChangeFun($event: any) {
    console.log("Im an event",$event)
    this.navtitleChange.emit($event);
  }

}
