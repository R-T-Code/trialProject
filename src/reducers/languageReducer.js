import * as types from '../actions/types';

const initialState = {
    testNote: '',
    activeLang: 'no',
    nav: {
        subscription: {
            en: 'mobile subscription',
            no: 'mobilabonnement'
        },
        support: {
            en: 'customer support',
            no: 'kundeservice'
        },
        shop: {
            en: 'online store',
            no: 'nettbutikk'
        }
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        
        //__Change language
        case types.TOGGLE_TEST: {
            console.log(action.note)
            return {...state, testNote: action.note}
        }

        default: return state;
    }
}