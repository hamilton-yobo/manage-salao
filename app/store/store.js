// import { combineReducers } from "@reduxjs/toolkit";
//
// import agendamento from './modules/agendamento/reducer';
//
// export default combineReducers({
//   agendamento,
// });


import createSagaMiddleware from 'redux-saga';
import { watchFetchAgendamentos } from '../store/modules/agendamento/sagas.js';
import { watchFetchClientes } from '../store/modules/cliente/sagas.js';
import { configureStore } from '@reduxjs/toolkit';
import { agendamentosReducer } from './modules/agendamento/reducer.js';
import { clientesReducer } from './modules/cliente/reducer.js';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { agendamentos: agendamentosReducer, clientes: clientesReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchAgendamentos);
sagaMiddleware.run(watchFetchClientes);

export default store;
