import { deletedUser, toggleInvite } from "./store/action";
import { useAppDispatch } from "./store/hooks"
import { addOpros } from "./store/types";

export const Info2: React.FC<addOpros> = ({ id, first_name, last_name, avatar, email, invited }) => {

	const dispatch = useAppDispatch()

	return (
		<li className="user_block">
			<div className="block_users">
				<div className="users_elem">
					{invited && (
						<img
							className="img_ready"
							alt="icon"
							src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
						/>
					)}

					<img className="img_users" alt="icon" src={avatar}></img>

					<div>
						<h1 onClick={() => dispatch(toggleInvite(id))} className="users_title">{first_name} {last_name}</h1>
						<p>{email}</p>
					</div>

					<button onClick={() => dispatch(deletedUser(id))} className="btn_delet">Удалить</button>
				</div>

			</div>
		</li>
	)

}