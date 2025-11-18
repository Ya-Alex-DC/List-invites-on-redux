import { Info2 } from "./Input"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { changeValue } from "./store/action"
import { fetchUsers } from "./store/getFetch"
import React from 'react';

export const Users2: React.FC = () => {
	const user = useAppSelector(state => state.userList)
	const value = useAppSelector(state => state.value)
	const dispatch = useAppDispatch()

	const onChengeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeValue(e.target.value))
	}

	return (
		<div>
			<input type="text" value={value} onChange={onChengeValue} placeholder="Найти пользователя"></input>
			<ul>
				{user.filter((e) => {
					const fullName = e.first_name.toLowerCase() + e.last_name.toLowerCase()
					const search = value.toLowerCase()
					return fullName.includes(search) || e.email.toLowerCase().includes(search)
				}).map(e =>
					<Info2
						key={e.id}
						{...e}
					/>
				)}
			</ul>
			<button onClick={() => dispatch(fetchUsers())} className="btn_add">Добавить</button>
		</div>
	)
}