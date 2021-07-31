import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{data} from 'src/app/data'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // @Output() passValue=new EventEmitter
  Items:data[]=[]
  

  constructor() { 
    
  }
  getValue(titem:string,tunit:string,tprice:string){
    
    let obj={item:titem,unit:tunit,price:tprice}
    this.Items.push(obj)
    
  }
 

  ngOnInit(): void {
    
  }

}
