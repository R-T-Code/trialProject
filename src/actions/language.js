import * as types from './types';

//__Change Language
export function testingFunction(note){
    return{
        type: types.TOGGLE_TEST,
        note
    }
}