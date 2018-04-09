import {tassign} from 'tassign';
import { IAppState } from './store';
import { INCREMENT } from './redux/actions';
import {Map} from 'immutable';
export interface IAppState{
count:number;
messaging?:{
    newMessages:number;
}
}

export const INITIAL_STATE={
    count :0,
    messaging:{
        newMessages:5
    }
}
export function rootReducer(state: Map<string,any>,action){
   switch(action.type){
       case INCREMENT:
      // return {count:state.count+1};
      // return Object.assign({},state,{count:state.count,isOnline:true})
      // return tassign(state,{count:state.count+1})
        return state.set('count',state.get('count')+1);
    }
    return state; 
}