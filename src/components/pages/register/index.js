import React, { useState, useContext } from "react";
import { AuthContext } from "../../../providers/Auth";
import styles from "./register.module.scss";
import { register } from "../../../api/auth";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setUser } = useContext(AuthContext);

	const submitForm = e => {
		e.preventDefault();
		register(email, password).then(res => setUser(res.data));
	};

	return (
		<div className={styles.register}>
			<form onSubmit={submitForm}>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="text"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					autoComplete="false"
				/>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	);
};

export default Register;
