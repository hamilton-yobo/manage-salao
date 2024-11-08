// import { combineReducers } from "@reduxjs/toolkit";
//
// import agendamento from './modules/agendamento/reducer';
//
// export default combineReducers({
//   agendamento,
// });


import createSagaMiddleware from 'redux-saga';
import { watchFetchAgendamentos } from '../store/modules/agendamento/sagas.js';
import { configureStore } from '@reduxjs/toolkit';
import { agendamentosReducer } from './modules/agendamento/reducer.js';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { agendamentos: agendamentosReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchAgendamentos);

export default store;
