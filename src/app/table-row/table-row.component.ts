
import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() Items:any
 
  
 
  constructor() {
    
   }

  ngOnInit(): void {
    console.log("helo")
  }
  delteElement(e:any,index:object){
    let ind=this.Items.indexOf(index)
    this.Items.splice(ind,1)
    
    
  }

  editElement(e:any,index:object){
    let ele=e.parentElement.parentElement
    console.log("ele",e.parentElement.parentElement.childNodes[0])
    
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
      //for edit any empty value
    ele.childNodes[1].textContent=this.Items[ind].unit
    ele.childNodes[2].textContent=this.Items[ind].price
      console.log("after edit ",this.Items[ind])
      e.textContent="edit"
      
    }
    
  }

}
