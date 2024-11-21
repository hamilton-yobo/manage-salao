import {
    FETCH_CLIENTES_REQUEST,
    FETCH_CLIENTES_SUCCESS,
    FETCH_CLIENTES_FAILURE
} from './actions';

const initialState = {
    clientes: [],
    loading: false,
    error: null,
};

export const clientesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLIENTES_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_CLIENTES_SUCCESS:
            return { ...state, loading: false, clientes: action.payload };
        case FETCH_CLIENTES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
