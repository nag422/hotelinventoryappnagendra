import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { InitService } from './init.service';
import { localStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigService } from './services/config.service';

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
  private initService: InitService, private serviceconfig: ConfigService, private router: Router ){
    console.log("%c"+initService.config.name, "color:white; background-color:red")
    console.log(initService.config)
}
  ngOnInit(){
    this.router.events.subscribe((event) => {
      console.log("%cRouterEvents: "+(event),"color:white;background: blue;padding:1rem");
    })
    // can subscribe router events of specific events as below
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      console.log("%cSpecific router event: "+event, "color:white;background-color:black;padding:0.5rem;font-size:13px")
    })
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      console.log("%cSpecific router event: "+event, "color:white;background-color:black;padding:0.5rem;font-size:13px;")
    })

    // end of subscribe router events
    this.loggerService?.log("AppComponent.ngOnit()");
    this.username.nativeElement.innerText = "This is nagendra kumar";
    this.localStorage.setItem("name", "Hilton Hotel");
  }
  ngAfterViewInit(){
    const compref = this.vcr.createComponent(RoomsComponent);
  }
}
