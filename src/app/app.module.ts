import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import {simpleReducer} from './simple.reducer'; 
import {postReducer} from './post.reducer'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      message:simpleReducer,
      post:postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge:10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
