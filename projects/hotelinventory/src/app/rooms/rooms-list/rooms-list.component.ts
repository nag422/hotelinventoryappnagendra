import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// OnChanges and DoCheck dont have to implement together because they both have works as same.
export class RoomsListComponent implements OnInit, OnChanges, DoCheck {
  @Input() rooms: RoomList[] = [];
  @Input() title: String = "";
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if(changes["title"]){
      this.title = changes["title"].currentValue.toLowerCase()
    }
  }
  ngDoCheck(): void {
    console.log('on docheck changes');
  }
  ngOnInit(): void {
  }
 

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
