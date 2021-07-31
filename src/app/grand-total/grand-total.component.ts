import { Component, OnInit,Input} from '@angular/core';
// import { createBrotliCompress } from 'zlib';

@Component({
  selector: 'app-grand-total',
  templateUrl: './grand-total.component.html',
  styleUrls: ['./grand-total.component.css']
})
export class GrandTotalComponent implements OnInit {
  @Input() Items:any=[]
  
  total=0
  
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  calculation(){
    this.total=0
    for(let i=0;i< this.Items.length;i++)
    {
    this.total+=this.Items[i].unit*this.Items[i].price;
    console.log(this.Items)
    }

    return this.total
  }


}
