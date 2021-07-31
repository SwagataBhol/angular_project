import { Injectable } from '@angular/core';
import {data} from "src/app/data"

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  Items:data[]=[]

  constructor() { }

readItems():data[]{
  return this.Items;
}

addItem(Items:data){

  this.Items.push(Items)
  
}

}