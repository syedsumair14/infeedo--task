import { combineReducers } from "redux";

const initState ={
    isAuth: false,
    apiResult: [],
    isLoading: true
}

const loginReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

const getApiReducer = (state = initState, action) => {
    switch(action.type){
        case 'API_RESULT':
            return {
                ...state,
                apiResult: action.payload,
                isLoading: false
            }
        case 'DELETE_POST':
            let resultant = state.apiResult.filter((obj,i) => {
                return obj.id !== action.payload
            })
            return {
                ...state,
                apiResult: resultant
            }
        case 'EDIT_API':
            let editedArray = state.apiResult.findIndex(post => {
                 return post.id === Number(action.payload.id)
            })
            let editedObject = {...state.apiResult[editedArray],title: action.payload.title, body: action.payload.body}
            state.apiResult.splice(editedArray,1,editedObject)
            return{
                ...state,
                apiResult: state.apiResult,
                isEdited: true
            }
        case 'IS_EDIT':
            return {
                ...state,
                isEdited: false
            }
        default:
            return state
    }
}

const getDetailReducer = (state =initState, action) => {
    switch(action.type){
        case 'GET_DETAIL':
            return{
                ...state,
                details: action.payload
            }
        default:
            return state
    }
}

const loadCommentsReducer = (state= initState, action) => {
    switch(action.type){
        case 'LOAD_COMMENTS':
            return{
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    loginReducer,
    getApiReducer,
    getDetailReducer,
    loadCommentsReducer
})