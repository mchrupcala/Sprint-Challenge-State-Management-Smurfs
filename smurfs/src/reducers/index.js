import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE, DELETE_SMURFS_START, DELETE_SMURFS_SUCCESS, DELETE_SMURFS_FAILURE } from '../actions';

export const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        //GET REQUESTS
        case FETCH_SMURFS_START: 
        console.log("Fetching data!")
        return {
            ...state,
            isFetching: true,
            isPosting: false,
            error: ''
        };

    case FETCH_SMURFS_SUCCESS:
        // console.log("Got that data tho.", action.payload);
        return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            isPosting: false,
            error: ''
        };

    case FETCH_SMURFS_FAILURE:
        // console.log("Did NOT get that data tho.");
        return {
            ...state,
            error: action.payload
        };

        //POST REQUESTS
        case POST_SMURFS_START: 
        // console.log("Posting data!", action.payload)
        return {
            ...state,
            isFetching: false,
            isPosting: true,
            error: ''
        };
    
        case POST_SMURFS_SUCCESS:
            // console.log("POsted that data tho.", action.payload);
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    state.smurfs.push(action.payload)
                ],
                isFetching: false,
                isPosting: false,
                error: ''
            };
    
        case POST_SMURFS_FAILURE:
            // console.log("Did NOT post that data tho.");
            // console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };

        case DELETE_SMURFS_START:
            console.log('trying to delete', action.payload);
            return {
                ...state,
                isFetching: false,
                isPosting: false,
                error: ''
            }

            case DELETE_SMURFS_SUCCESS:
                    console.log('DID', action.payload);
                    return {
                        ...state,
                        isFetching: false,
                        isPosting: false,
                        error: ''
                    }

        case DELETE_SMURFS_FAILURE:
                console.log("Did NOT get that data tho.");
                return {
                    ...state,
                    error: action.payload
                };

        default: 
            return state; 
    }
}