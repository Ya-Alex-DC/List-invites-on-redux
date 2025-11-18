import {
	ADD_USERS,
	DELETE_USER,
	ON_CHANGE_VALUE,
	TOGGLE_INVITE,
	ServerUser,
	oprosAction
} from "./types";

export const addUsers = (payload: ServerUser[]): oprosAction => ({
	type: ADD_USERS,
	payload,
});

export const deletedUser = (payload: number): oprosAction => ({
	type: DELETE_USER,
	payload,
});

export const changeValue = (payload: string): oprosAction => ({
	type: ON_CHANGE_VALUE,
	payload,
});

export const toggleInvite = (payload: number): oprosAction => ({
	type: TOGGLE_INVITE,
	payload,
});
