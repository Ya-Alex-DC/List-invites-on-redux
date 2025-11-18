import { AppDispatchType } from "./index";
import { addUsers } from "./action";
import { ServerUser } from "./types";

export const fetchUsers = () => {
	return async (dispatch: AppDispatchType) => {
		try {
			const res = await fetch('http://localhost:3500/data');
			const json: ServerUser[] = await res.json();
			dispatch(addUsers(json));
		} catch (e) {
			console.error(e);
			alert("Ошибка");
		}
	};
};
