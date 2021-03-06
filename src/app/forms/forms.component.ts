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
  myStorage = window.localStorage;

  constructor() { 
    
  }
  getValue(titem:string,tunit:string,tprice:string){
    if(titem!=="" && tunit !== "" && tprice !== "")
    {
      
      let obj={item:titem,unit:tunit,price:tprice}
      this.Items.push(obj)
      console.log(obj)
      this.myStorage.setItem("Items", JSON.stringify(this.Items))
      this.Items = JSON.parse(this.myStorage.getItem('Items') || '{}')
      

    }
    else
    {
        alert("Fields should not be empty..")
    } 
    
  }
  

  ngOnInit(): void {
    
  }

}
