import api from '../utils/api'

export const loginAction = ({email,password}) => {
    return (dispatch) => {
    if(email === 'dear@infeedo.com' && password === 'letMeIn'){
        localStorage.setItem('token', 'giveAccess')
        dispatch({type: 'LOGIN', payload:true})
    }
    }
}

export const getApi = () => {
    return (dispatch) => {
        api.get('posts')
        .then(res => dispatch({type: 'API_RESULT', payload: res.data}))
    }
}

export const deleteGetApi = (id) => dispatch => dispatch({type: 'DELETE_POST', payload: id})
export const editAPI = (title, body, id) => dispatch => dispatch({type: 'EDIT_API', payload: {title, body, id}})
export const changeEditStatus = () => dispatch => dispatch({type:'IS_EDIT', payload: false})

export const getDetail = (id) => {
    return (dispatch) => {
        api.get(`posts/${id}`)
        .then(res => dispatch({type: 'GET_DETAIL', payload: res.data}))
    }
}

export const loadComments = (id) => {
    return (dispatch) => {
        api.get(`posts/${id}/comments`)
        .then(res => dispatch({type:'LOAD_COMMENTS', payload:res.data}))
    }
}