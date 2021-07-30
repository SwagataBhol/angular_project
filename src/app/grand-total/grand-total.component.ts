import { Component, OnInit,Input} from '@angular/core';
// import { createBrotliCompress } from 'zlib';

@Component({
  selector: 'app-grand-total',
  templateUrl: './grand-total.component.html',
  styleUrls: ['./grand-total.component.css']
})
export class GrandTotalComponent implements OnInit {
  @Input() userData:any=[]
  
  total=0
  
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  calculation(){
    this.total=0
    for(let i=0;i< this.userData.length;i++)
    {
    this.total+=this.userData[i].unit*this.userData[i].price;
    console.log(this.userData)
    }

    return this.total
  }


}
