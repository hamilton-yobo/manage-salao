import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_AGENDAMENTOS_REQUEST, fetchAgendamentosSuccess, fetchAgendamentosFailure } from './actions';
import moment from 'moment';

function* fetchAgendamentosSaga(action) {
    try {
        const response = yield call(fetch, 'http://localhost:3000/agendamento/filter', 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          salaoId: action.payload.salaoId,
          periodo: {
            inicio: moment(action.payload.periodo.inicio).startOf('day'),
            final: moment(action.payload.periodo.final).endOf('day')
          }
        })
      }
    );
        const data = yield response.json();
        yield put(fetchAgendamentosSuccess(data));
    } catch (error) {
        yield put(fetchAgendamentosFailure(error.message));
    }
}

export function* watchFetchAgendamentos() {
    yield takeLatest(FETCH_AGENDAMENTOS_REQUEST, fetchAgendamentosSaga);
}
