import { useState, useEffect, useContext, createContext } from "react";
export const DataContext = createContext();

export default function DataProvider({ children }) {
	const [userInfo, setUserInfo] = useState({
		email: "",
		profile_pic: "",
	});

	function setEmail(email) {
		setUserInfo((prev) => ({ ...prev, email }));
	}

	function setProfilePic(profile_pic) {
		setUserInfo((prev) => ({ ...prev, profile_pic }));
	}

	return (
		<DataContext.Provider value={{ setEmail, setProfilePic, userInfo }}>
			{children}
		</DataContext.Provider>
	);
}
