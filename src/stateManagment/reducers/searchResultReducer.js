import actionType from "../actions/actionType";
import initialState from "../state/state";

export const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SHOW_SEARCH_RESULT:
            return {
                ...state,
                searchResultState:action.payload
            }

        default:
            return {
                ...state
            }
    }
}