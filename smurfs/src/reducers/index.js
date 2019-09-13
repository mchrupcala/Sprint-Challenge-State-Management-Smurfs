import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from '../actions';

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START: 
        console.log("Fetching data!")
        return {
            ...state,
            isFetching: true,
            error: ''
        };

    case FETCH_SMURFS_SUCCESS:
        console.log("Got that data tho.", action.payload);
        return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ''
        };

    case FETCH_SMURFS_FAILURE:
        console.log("Did NOT get that data tho.");
        return {
            ...state,
            error: action.payload
        };
        default: 
            return state; 
    }
}