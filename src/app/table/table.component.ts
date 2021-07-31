import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() Items:any[]=[]

  
  constructor() { 
  }

  ngOnInit(): void {
  }
  

  deleteItem(currentItem:object){
     let ind=this.Items.indexOf(currentItem)
    this.Items.splice(ind,1)
  }
  
  editItem(passEventValue:any){
    
    let e=passEventValue[0]
    let ele=e.parentElement.parentElement
    let index=passEventValue[1]
    console.log(e.textContent)
    
    if(e.textContent=="edit"){
        console.log("hello")
      ele.childNodes[0].contentEditable=true
      ele.childNodes[1].contentEditable=true
      ele.childNodes[2].contentEditable=true
      
      e.textContent="save"

     }
    else{
      ele.childNodes[0].contentEditable=false
      ele.childNodes[1].contentEditable=false
      ele.childNodes[2].contentEditable=false
      ele.childNodes[3].textContent=ele.childNodes[1].textContent*ele.childNodes[2].textContent
      let ind=this.Items.indexOf(index)
      this.Items[ind].unit=ele.childNodes[1].textContent
      this.Items[ind].price=ele.childNodes[2].textContent

      console.log("after edit ",this.Items[ind])
      e.textContent="edit"
      
    }

  }
}
