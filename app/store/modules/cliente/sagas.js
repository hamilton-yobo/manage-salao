import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CLIENTES_REQUEST, fetchClientesSuccess, fetchClientesFailure } from './actions';

function* fetchClientesSaga(action) {
    try {
        const { salaoId } = action.payload;
        const response = yield call(fetch, `http://localhost:3000/salao/cliente/${salaoId}`, 
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }
    );
        const data = yield response.json();
        yield put(fetchClientesSuccess(data.data));
    } catch (error) {
        yield put(fetchClientesFailure(error.message));
    }
}

export function* watchFetchClientes() {
    yield takeLatest(FETCH_CLIENTES_REQUEST, fetchClientesSaga);
}
