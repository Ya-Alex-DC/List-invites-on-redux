export interface ServerUser {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface addOpros extends ServerUser {
	invited: boolean;
}

export interface oprosState {
	userList: addOpros[];
	value: string;
}

export const ADD_USERS = 'ADD_USERS' as const;
export const DELETE_USER = 'DELETE_USER' as const;
export const ON_CHANGE_VALUE = 'ON_CHANGE_VALUE' as const;
export const TOGGLE_INVITE = 'TOGGLE_INVITE' as const;

export type oprosAction =
	| { type: typeof ADD_USERS; payload: ServerUser[] }
	| { type: typeof DELETE_USER; payload: number }
	| { type: typeof ON_CHANGE_VALUE; payload: string }
	| { type: typeof TOGGLE_INVITE; payload: number };
