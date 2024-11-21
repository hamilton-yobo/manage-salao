export const FETCH_CLIENTES_REQUEST = 'FETCH_CLIENTES_REQUEST';
export const FETCH_CLIENTES_SUCCESS = 'FETCH_CLIENTES_SUCCESS';
export const FETCH_CLIENTES_FAILURE = 'FETCH_CLIENTES_FAILURE';

export const fetchClientesRequest = (filtros) => ({ 
  type: FETCH_CLIENTES_REQUEST,
  payload: filtros,
});
export const fetchClientesSuccess = (clientes) => ({
    type: FETCH_CLIENTES_SUCCESS,
    payload: clientes,
});
export const fetchClientesFailure = (error) => ({
    type: FETCH_CLIENTES_FAILURE,
    payload: error,
});
