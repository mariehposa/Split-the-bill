import * as types from './actionTypes';
import AxiosAuth from "../axios/AxiosAuth";


const splitsApi = 'https://split-the-bill-api.herokuapp.com/api/users/profile';

export function increment(){
    return {type: types.INCREMENT}
}

export function decrement (){
    return {type: types.DECREMENT}
}

export function reset(){
    return {type: types.RESET}
}

export const addUsers = (users) => ({
    type: types.ADD_USERS,
    payload: users,
})

export const currentUser = (user) => ({
    type: types.ADD_CURRENT_USER,
    payload: user,
})

export const getUsers = () => dispatch => {
    AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users')
    .then(res => {
        dispatch(addUsers(res.data.users))
    })
    .catch(err => console.log(err))
}

export const getUserDetails = () => dispatch => {
    AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users/profile')
        .then(res => {
        dispatch(currentUser(res.data.user))        
    })
    .catch(err => console.log(err))
}
export const getSplits = () => dispatch => {
    AxiosAuth().get(splitsApi)
        .then(res => {
            const splitsAray = res.data.user.splits;
            dispatch({type: types.ADD_SPLITS, payload: splitsAray});
        })
        .catch(error => {
            console.log(error.message);
        })
}


// export const getSplits = () => dispatch => {
//     const splitsPromise = AxiosAuth(splitsApi);

//     Promise.all([splitsPromise])
//         .then(([splitsApiResponse]) => {
//             debugger
//             const splits = splitsApiResponse.data.user.splits;

//             dispatch({type: types.ADD_SPLITS, payload: splits});
//         });
// }
