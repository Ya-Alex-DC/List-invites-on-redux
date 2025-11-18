import { createStore, applyMiddleware } from 'redux'
import { thunk, ThunkMiddleware } from 'redux-thunk'
import { reducer } from './reducer'
import { oprosAction } from './types';

export type RootState = ReturnType<typeof reducer>;

export const store = createStore(
	reducer,
	undefined,
	applyMiddleware(thunk as ThunkMiddleware<RootState, oprosAction>))

export type AppDispatchType = typeof store.dispatch;