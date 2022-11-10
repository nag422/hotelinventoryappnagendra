import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { InitService } from './init.service';
import { localStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
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
  // optional is no problem even services is not provided in root, ofcourse service skips from running
  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: Storage,
  private initService: InitService ){
    console.log("%c"+initService.config.name, "color:white; background-color:red")
    console.log(initService.config)
}
  ngOnInit(){
    this.loggerService?.log("AppComponent.ngOnit()");
    this.username.nativeElement.innerText = "This is nagendra kumar";
    this.localStorage.setItem("name", "Hilton Hotel");
  }
  ngAfterViewInit(){
    const compref = this.vcr.createComponent(RoomsComponent);
  }
}
