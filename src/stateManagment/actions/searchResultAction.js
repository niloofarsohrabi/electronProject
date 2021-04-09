import actionType from "./actionType"

export const searchResultAction = (finallValueOfSearch) => {
    console.log("finall value am")
    console.log(finallValueOfSearch)
    return {
        type: actionType.SHOW_SEARCH_RESULT,
        payload: finallValueOfSearch
    }
}