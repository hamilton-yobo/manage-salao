// import { all, takeLatest, call } from 'redux-saga/effects';
// import consts from '../../../consts.js';
//  
// export function* filterAgendamento({start, end}) {
//  console.log("Entrou no filterAgendamento") 
//   try {
//     const res = yield fetch('http://localhost:3000/agendamento', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       // body: JSON.stringify({
//       //   salaoId: consts.salaoId,
//       //   periodo: {
//       //     inicio: start,
//       //     final: end
//       //   }
//       // })
//     });
//
//     if (!res.ok) {
//       throw new Error(`Error: ${res.status}`);
//     }
//
//     const data = yield res.json();
//     console.log('Resposta do servidor:',data);
//
//   } catch (err) {
//     alert(err.message)
//   }
// }
//
// export default all([takeLatest('@agendamento/FILTER', filterAgendamento)]);


import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_AGENDAMENTOS_REQUEST, fetchAgendamentosSuccess, fetchAgendamentosFailure } from './actions';

function* fetchAgendamentosSaga(action) {
    try {
        const response = yield call(fetch, 'http://localhost:3000/agendamento/filter', 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          salaoId: "672a645394524c18905aca24",
          periodo: {
            inicio: "2024-11-08",
            final: "2024-11-12"
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
