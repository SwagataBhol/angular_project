
import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() userData:any[]=[]
  @Output() passevent= new EventEmitter()
  
 
  constructor() {
    console.log(this.userData)
  
   }

  ngOnInit(): void {
    console.log("helo")
  }
  delteElement(e:any,index:any){
    let ind=this.userData.indexOf(index)
    this.userData.splice(ind,1)
    this.passevent.emit(e)
    
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
      let ind=this.userData.indexOf(index)
      this.userData[ind].unit=ele.childNodes[1].textContent
      this.userData[ind].price=ele.childNodes[2].textContent
      console.log("after edit ",this.userData[ind])
      e.textContent="edit"
      
    }
    
  }

}
