import React, { useState } from "react";

export const AuthContext = React.createContext(null);

const Auth = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default Auth;
