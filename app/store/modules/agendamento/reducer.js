// const INITIAL_STATE = {
//   agendamentos: [],
// };
//
// function agendamento(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case '@agendamento/ALL': {
//       ///
//     }
//     default:
//       return state;
//   }
// }
//
// export default agendamento;
import {
    FETCH_AGENDAMENTOS_REQUEST,
    FETCH_AGENDAMENTOS_SUCCESS,
    FETCH_AGENDAMENTOS_FAILURE,
} from './actions';

const initialState = {
    agendamentos: [],
    loading: false,
    error: null,
};

export const agendamentosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AGENDAMENTOS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_AGENDAMENTOS_SUCCESS:
            return { ...state, loading: false, agendamentos: action.payload };
        case FETCH_AGENDAMENTOS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
