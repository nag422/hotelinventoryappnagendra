import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'hotelinventory';
  usertype = 'admin';
  @ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('username', { static: true}) username!: ElementRef;
  ngOnInit(){
    this.username.nativeElement.innerText = "This is nagendra kumar";
  }
  ngAfterViewInit(){
    const compref = this.vcr.createComponent(RoomsComponent)
  }
}
