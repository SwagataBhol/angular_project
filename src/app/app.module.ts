import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {UsersModule} from './users/users.module';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { GrandTotalComponent } from './grand-total/grand-total.component'
import {FormsModule} from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TableComponent,
    TableRowComponent,
    GrandTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
