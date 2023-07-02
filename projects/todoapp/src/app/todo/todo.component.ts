import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm !: FormGroup;
  todo:ITask [] =[];
  tasks: ITask [] =[];
  inprogress: ITask[] =[];
  done: ITask[] = [];
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required]
    })
  }

  addTask(){
    this.tasks.push({
      description: this.todoForm.value.item,
      done: false
    })
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter((val,indx)=>indx !== id);
  }
  deleteInprogress(id:number){
    this.inprogress.splice(id,1)
  }
  deleteDone(id:number){
    this.done.splice(id,1);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
