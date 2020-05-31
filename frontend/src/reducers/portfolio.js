import { CREATE_PORTFOLIO, GET_PORTFOLIO, PORTFOLIO_ERROR, 
    GET_OWN_PORTFOLIO, CLEAR_PORTFOLIO, ADD_SKILL, REMOVE_TESTIMONY,
    REMOVE_SKILL, UPDATE_PORTFOLIO, ADD_TESTIMONY, DELETE_PORTFOLIO
} from '../actions/types'

const initialState = {
    portfolios: [],
    portfolio: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_PORTFOLIO: 
        case GET_OWN_PORTFOLIO:
        case UPDATE_PORTFOLIO:
        case ADD_SKILL:
        case ADD_TESTIMONY:
        case REMOVE_SKILL:
        case REMOVE_TESTIMONY:
            return {
                ...state,
                portfolio: payload,
                loading: false
            }
        case CREATE_PORTFOLIO:
            return {
                ...state,
                portfolio: [...state.portfolios, payload],
                loading: false
            }
        case CLEAR_PORTFOLIO:
        case DELETE_PORTFOLIO:
            return {
                ...state,
                portfolio: null,
                loading: false
            }
        case PORTFOLIO_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}