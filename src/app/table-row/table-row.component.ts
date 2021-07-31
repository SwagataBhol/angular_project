
import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() index:any
  @Output() deleteEvent=new EventEmitter
  @Output() editEvent=new EventEmitter
 
  
 
  constructor() {
    
   }

  ngOnInit(): void {
    console.log("helo")
  }
  delteElement(e:any,currentObject:object){

    this.deleteEvent.emit(currentObject)

  }

  editElement(e:any,currentObject:object){
    let passEvent=[e,currentObject]
    this.editEvent.emit(passEvent)
  }

}
