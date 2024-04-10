import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";
import FormIpnut from "../components/FormInput";

function Login() {
	const [errorMessage, setErrorMessage] = useState("");
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const { login, setEmail } = useContext(DataContext);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		try {
			login(data.email, data.password);
			navigate("/avatar");
		} catch (err) {
			setErrorMessage(err)
		}
	}

	return (
		<section className="bg-white flex h-full">
			<figure className="hidden md:flex bg-yellow-bg flex-col justify-between text-yellow-text pl-12 py-12">
				<span className="logo font-extrabold text-5xl">dribble</span>
				<p className="text-xl font-bold">
					Discover the world's top
					<br />
					Designer & creatives.
				</p>
				<img src="bg-svg.png" />
				<p>
					Art by <a className="underline">Peter Tarka</a>
				</p>
			</figure>
			<div className="flex flex-col p-4 grow">
				<span className="font-semibold self-end md:self-end my-4">
					Dont have an account?{" "}
					<Link to="/register" className="text-link ml-1">
						Sing Up
					</Link>
				</span>
				<form
					onSubmit={handleSubmit}
					className="self-stretch max-w-full md:self-center flex flex-col gap-8 md:max-w-[60%]"
				>
					<span className="font-bold text-2xl sm:text-3xl md:text-4xl flex-nowrap">
						Login to dribble!
					</span>

					{/* error message */}
					<p className="text-base text-warning-dark">
						{errorMessage ? `• ${errorMessage.message}` : "​"}
						{/* U+200B is being returned. (insivible charatcer) */}
					</p>

					{/* email */}
					<FormIpnut
						label="Email"
						type="email"
						id="email"
						name="email"
						placeholder="email"
						error={errorMessage?.id == 2}
						handleChange={(e) =>{
							setEmail(e.target.value)
							setData((p) => ({ ...p, email: e.target.value }))}
						} 
					/>

					{/* password */}
					<FormIpnut
						label="Password"
						type="password"
						id="password"
						name="password"
						placeholder="6+ characters"
						error={errorMessage?.id == 1}
						handleChange={(e) => setData((p) => ({ ...p, password: e.target.value }))}
					/>
					<div className="flex w-full gap-2 items-start justify-between">
						<div className="flex gap-2">
							<input
								id="terms"
								name="terms"
								type="checkbox"
								className="accent-pink-active size-6"
							/>
							<p className="text-gray-base">remember me?</p>
						</div>
						<div className="flex gap-2 items-center text-gray-dark">
							<FontAwesomeIcon icon={faLock} />
							<Link to="#">forgot password?</Link>
						</div>
					</div>

					<button className="bg-pink-active p-4 rounded-md text-white font-semibold w-[50%]">
						Login
					</button>
					<p className="text-gray-base">
						This website is protected by reCaptcha and the Google{" "}
						<Link to="#" className="text-link">
							Privacy Policy
						</Link>{" "}
						and
						<Link to="#" className="text-link">
							Terms of Services
						</Link>{" "}
						apply.
					</p>
				</form>
			</div>
		</section>
	);
}

export default Login;
