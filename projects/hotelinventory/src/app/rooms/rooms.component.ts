import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
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
  // with static true can avoid conflicts between header ngOninit method with here ngOnint
  @ViewChild(HeaderComponent, { static: true }) headerComp!:HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

//  make private to avoid user publicly in templates and available in current ts file itself.
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
   this.roomsList = this.roomsService.getRooms();
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
    this.roomsList = ([...this.roomsList, {...roomsdata, roomType: 'new furniture'}]);
    // this.roomsList.push(this.roomsList[2])
  }

}
