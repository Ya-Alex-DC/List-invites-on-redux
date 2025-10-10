import { Info2 } from "./Input"
import { useSelector, useDispatch } from 'react-redux'
import { addUsers, changeValue } from ".."

export const Users2 = () => {
	const user = useSelector(state => state.userList)
	const value = useSelector(state => state.value)
	const dispatch = useDispatch()

	const fetchUsers = () => {
		return function (dispatch) {
			fetch('http://localhost:3500/data')
				.then(res => res.json())
				.then((json) => dispatch(addUsers(json)))
				.catch(err => {
					console.warn(err)
					alert('Ошибка')
				})
		}
	}

	const onChengeValue = (e) => {
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