import { useState, useEffect, useContext, createContext } from "react";
export const DataContext = createContext();

export default function DataProvider({ children }) {
	const [userInfo, setUserInfo] = useState({
		email: "",
		profile_pic: "",
	});
	const user = {
		username: "JhDoe",
		name: "john doe",
		email: "johndoe@gmail.com",
		password: "example",
	};

	function register(username, name, email, password) {
		if (username === user.username) {
			throw { message: "username exists", id: 1 };
		}
		if (name === user.name) {
			throw { message: "name alreasy exists", id: 2 };
		}
		if (email === user.email) {
			throw { message: "email is already in use", id: 3 };
		}
	}

	function login(email, password) {
		console.log(email, password)
		if (email !== user.email) {
			throw { message: "user does not exists", id: "2" };
		}
		if (password !== user.password) {
			throw { message: "password is incorrect", id: "1" };
		}
	}

	function setEmail(email) {
		setUserInfo((prev) => ({ ...prev, email }));
	}

	function setProfilePic(profile_pic) {
		setUserInfo((prev) => ({ ...prev, profile_pic }));
	}

	return (
		<DataContext.Provider
			value={{ login, register, setEmail, setProfilePic, userInfo }}
		>
			{children}
		</DataContext.Provider>
	);
}
