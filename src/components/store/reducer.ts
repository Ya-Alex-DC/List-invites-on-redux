import {
	ADD_USERS,
	DELETE_USER,
	ON_CHANGE_VALUE,
	TOGGLE_INVITE,
	oprosState,
	oprosAction,
} from "./types";

const initial: oprosState = {
	userList: [],
	value: '',
};

export const reducer = (state = initial, action: oprosAction): oprosState => {
	switch (action.type) {
		case ADD_USERS:
			return {
				...state,
				userList: [
					...state.userList,
					...action.payload
						.filter(u => !state.userList.some(x => x.id === u.id))
						.map(u => ({ ...u, invited: false })),
				],
			};

		case DELETE_USER:
			return {
				...state,
				userList: state.userList.filter(u => u.id !== action.payload),
			};

		case ON_CHANGE_VALUE:
			return { ...state, value: action.payload };

		case TOGGLE_INVITE:
			return {
				...state,
				userList: state.userList.map(u =>
					u.id === action.payload ? { ...u, invited: !u.invited } : u
				),
			};

		default:
			return state;
	}
};
