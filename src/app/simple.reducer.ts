import {Action} from '@ngrx/store';

export function simpleReducer(state: string = 'Hello', action:Action){
    console.log(action.type)

    switch(action.type){
        case 'Spanish':
            return 'Hello Spanish'
        case 'English':
            return 'Hello English'
        default :
            return state
    }
}