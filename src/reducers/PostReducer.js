import { actions } from "../actions";

const initialState = {
    post: [],
    loading: false,
    error: null
}

const postReducer = (state, action) => {
    switch (action.type) {
        case actions.post.DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }

        case actions.post.DATA_FETCHED: {
            return {
                ...state,
                posts: action.data,
                loading: false

            }
        }

        case actions.post.DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: actions.error
            }
        }

        default:
            return state;
    }
}

export { postReducer, initialState }