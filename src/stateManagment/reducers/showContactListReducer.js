import actionType from "../actions/actionType";
import initialState from "../state/state";


export const showContactListReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionType.SHOW_CONTACT_LIST:
            return{
                ...state,
                contactListState:state.contactListState
            }
            
    
        default:
           return{
               ...state
           }
    }
}