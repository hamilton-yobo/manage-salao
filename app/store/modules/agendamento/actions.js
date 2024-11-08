export const FETCH_AGENDAMENTOS_REQUEST = 'FETCH_AGENDAMENTOS_REQUEST';
export const FETCH_AGENDAMENTOS_SUCCESS = 'FETCH_AGENDAMENTOS_SUCCESS';
export const FETCH_AGENDAMENTOS_FAILURE = 'FETCH_AGENDAMENTOS_FAILURE';

export const fetchAgendamentosRequest = (filtros) => ({ 
  type: FETCH_AGENDAMENTOS_REQUEST,
  payload: filtros,
});
export const fetchAgendamentosSuccess = (agendamentos) => ({
    type: FETCH_AGENDAMENTOS_SUCCESS,
    payload: agendamentos,
});
export const fetchAgendamentosFailure = (error) => ({
    type: FETCH_AGENDAMENTOS_FAILURE,
    payload: error,
});
