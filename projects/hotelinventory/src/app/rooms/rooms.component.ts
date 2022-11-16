import { HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = "jobowler";
  checkingprpBinding = 10;
  isithidden = false;
  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 0,
    totalRooms: 0
  };
  roomsList: RoomList[] = []
  selectedRoom!: RoomList;
  title = 'rooms List';
  totalBytes = 0;
  subscription!: Subscription; //create at around 8.30 to 9.00 timeline youtube.
  error$ = new Subject<string>(); // for checing .next
  getError$ = this.error$.asObservable(); // for checing .next
  stream = new Observable<any>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });
  // with static true can avoid conflicts between header ngOninit method with here ngOnint
  @ViewChild(HeaderComponent, { static: true }) headerComp!:HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError(err => {
      console.log(err);
      // Start .next like this is donot use in realtime its just for learing
      this.error$.next(err.message); // actually have to write in services not in components.
      // Ending .next like this is donot use in realtime its just for learing
      return of([])
    })
  );
  roomsCount$ = this.roomsService.getRooms$.pipe(map((rooms) => rooms.length))
//  make private to avoid user publicly in templates and available in current ts file itself.
  constructor(private roomsService: RoomsService, private configService: ConfigService) { }

  ngOnInit(): void {
    /* this.roomsService.getPhotos().subscribe((event:any) => {
      switch (event.type){
        case HttpEventType.Sent: {
          console.log("Request has been made")
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Response header has been received');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes+= event.loaded;
          break;
        }
        case HttpEventType.Response:{
          console.log(event.body)
          break;
        }
      }

      
    }) */
    // Sterea sbubscribe these below three funcs.
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    })
    this.stream.subscribe((data) => console.log(data));
   this.roomsService.getRooms$.subscribe(rooms => {
    this.roomsList = rooms;
   });
   console.log(this.roomsList)
  }

  ngAfterViewInit(): void {
    console.log('after viewinit')
    this.headerComp.title = "Welcome from rooms component";
    this.headerChildrenComponent.last.title="last last title";
    console.log(this.headerChildrenComponent.get(0)?.title)
  }
  ngAfterViewChecked(): void {
    console.log('after vieewchecked')
  }
  toggle(): void {
    this.isithidden = !this.isithidden;
    this.title = "New title has been changed."
  }
  selectingRoom(room: RoomList){
    this.selectedRoom = room;
  }
  addRoom(){
    const roomsdata = this.roomsList[2];
    // this.roomsList = ([...this.roomsList, {...roomsdata, roomType: 'new furniture'}]);
    // this.roomsList.push(this.roomsList[2])
    this.roomsService.addRoom(roomsdata).subscribe((data) => {
      this.roomsList = data;
    })
  }
  editRoom(){
    let roomsdata = this.roomsList[2];
    roomsdata['roomType'] = "lavada type";
    this.roomsService.editRoom(roomsdata).subscribe((data) => {
      this.roomsList = data;
    })
  }
  deleteRoom(){
    let roomsdata = this.roomsList[2];
    this.roomsService.deleteRoom((roomsdata?.roomNumber).toString()).subscribe((data) => {
      this.roomsList = data;
    })
  }
  // ngOndestroy can use to unsubscribe for manually subscribed streams.

}
