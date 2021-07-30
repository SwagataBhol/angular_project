import { Component, OnInit } from '@angular/core';
import{data} from 'src/app/data'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  userData:data[]=[]
  total=0

  constructor() { 
    console.log("this.userData")
  }
  getValue(titem:string,tunit:string,tprice:string){
    
    let obj={item:titem,unit:tunit,price:tprice}
    this.userData.push(obj)
    
  }
  deleteValue(e:any){
    let ele=e.parentElement.parentElement
    
  
  }

  ngOnInit(): void {
    
  }

}
