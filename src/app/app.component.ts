import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {Post} from './post.model';
import * as PostActions from './post.action';


interface AppState {
  message:string,
  post:Post
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPOC';
  textData:string="";
  message$ : Observable<string>
  post$:Observable<Post>

  constructor(private store:Store<AppState>){
    this.message$ = this.store.select('message');
    this.post$ = this.store.select('post')
  }

  spanishMessage(){
    this.store.dispatch({type:'Spanish'})
  }

  englishMessage(){
    this.store.dispatch({type:'English'})
  }

  editText(){
    this.store.dispatch(new PostActions.EditText(this.textData))
  }

  upVote(){
    this.store.dispatch(new PostActions.Upvote())
  }

  downVote(){
    this.store.dispatch(new PostActions.Downvote())
  }

  reset(){
    this.store.dispatch(new PostActions.Reset()) 
  }
}
