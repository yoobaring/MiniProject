import {createStore, combineReducers} from 'redux'
const initialForm = {
    
    name: '',
    surname: '',
    position: '',
    time: '',
    tell: ' '
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_SURNAME': return {...state,surname: action.surname}
        case 'CHANGE_POSITION': return {...state,position: action.position}
        case 'CHANGE_TIME': return {...state,time: action.time}
        case 'CHANGE_TELL': return {...state,tell: action.tell}
        default:return state;
    }
}

const staffReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_STAFF':
            return action.staff
        case 'ADD_STAFF': 
            return [...state,action.staff]
        case 'DELETE_STAFF':
                return state.filter(staff => staff.id !== +action.id)
        case 'UPDATE_STAFF':
            return state.map(staff =>{
                if(+staff.id === +action.id)
                    return action.staff;
                else return staff;
                })
        default:
            return state;
    }
}
const reducer = combineReducers({
    staff: staffReducer,
    form: formReducer
})



export const store = createStore(reducer)