import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

const users = {
	userList: [],
	value: ''
}

const ADD_USERS = 'ADD_USERS'
const DELETE_USER = 'DELETE_USER'
const ON_CHANGE_VALUE = 'ON_CHANGE_VALUE'
const TOGGLE_INVITE = 'TOGGLE_INVITE'

const reducer = (state = users, action) => {
	switch (action.type) {

		case ADD_USERS:
			const newUsers = action.payload.filter(u => !state.userList.some(
				existing => existing.id === u.id
			)).map(e => ({ ...e, invited: false }))
			return { ...state, userList: [...state.userList, ...newUsers] }

		case DELETE_USER:
			return { ...state, userList: state.userList.filter(e => e.id !== action.payload) }

		case ON_CHANGE_VALUE:
			return { ...state, value: action.payload }

		case TOGGLE_INVITE:
			return {
				...state,
				userList: state.userList.map(u =>
					u.id === action.payload ? { ...u, invited: !u.invited } : u
				)
			}

		default:
			return state
	}
}

export const deletedUser = (payload) => ({ type: DELETE_USER, payload })
export const changeValue = (payload) => ({ type: ON_CHANGE_VALUE, payload })
export const addUsers = (payload) => ({ type: ADD_USERS, payload })
export const toggleInvite = (payload) => ({ type: TOGGLE_INVITE, payload: payload })

const store = createStore(reducer, applyMiddleware(thunk))
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>

);
