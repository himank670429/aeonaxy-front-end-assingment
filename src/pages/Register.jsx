import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormIpnut from "../components/FormInput";
function Register() {
	const [errorMessage, setErrorMessage] = useState("error");
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		// rest of the code;
		navigate("/avatar");
	}

	return (
		<section className="bg-white flex h-full">
			<figure className="hidden lg:flex bg-yellow-bg flex-col justify-between text-yellow-text pl-12 py-12">
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
					className="self-stretch max-w-full md:self-center flex flex-col gap-8 md:px-12"
				>
					<span className="font-bold text-2xl sm:text-3xl md:text-4xl ">Sign up to dribble</span>

					{/* error message */}
					<p className="text-base text-warning-dark">
						{errorMessage ? `• ${errorMessage}` : "​"}
						{/* U+200B is being returned. (insivible charatcer) */}
					</p>

					{/* names */}
					<div className="flex flex-col md:flex-row gap-4">
						<FormIpnut
							className="grow"
							label="Name"
							type="text"
							id="name"
							name="name"
							placeholder="name"
						/>
						<FormIpnut
							className="grow"
							label="Username"
							type="text"
							id="username"
							name="username"
							placeholder="username"
							// error={true}
						/>
					</div>

					{/* email */}
					<FormIpnut
						label="Email"
						type="email"
						id="email"
						name="email"
						placeholder="email"
					/>

					{/* password */}
					<FormIpnut
						label="Password"
						type="password"
						id="password"
						name="password"
						placeholder="6+ characters"
					/>
					<div className="flex w-full gap-2 items-start">
						<input
							id="terms"
							name="terms"
							type="checkbox"
							className="accent-pink-active size-8"
						/>
						<p className="text-gray-dark">
							creating an account means you're okay our{" "}
							<Link to="#" className="text-link">
								Terms of Service, Privacy Policy,
							</Link>{" "}
							and our default{" "}
							<Link to="#" className="text-link">
								Notification Settings.
							</Link>
						</p>
					</div>

					<button className="bg-pink-active p-4 rounded-md text-white font-semibold w-[50%]">
						Create Account
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

export default Register;
