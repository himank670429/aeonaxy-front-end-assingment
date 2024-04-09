import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";
function EmailConfirm() {
	const { userInfo } = useContext(DataContext);
	return (
		<div className="flex flex-col">
			<Navbar />
			<main className="text-gray-base flex flex-col gap-4 items-center my-12 text-center px-4">
				<span className="text-black text-2xl font-bold sm:text-3xl md:text-4xl">
					Please verify your email...
				</span>
				<div className="relative">
					<FontAwesomeIcon className="text-[100px]" icon={faEnvelope} />
					<FontAwesomeIcon
						className="absolute text-pink-active bg-white border-4 text-3xl border-white top-[.0.5em] right-[-.5em] rounded-full"
						icon={faCircleCheck}
					/>
				</div>
				<p>please verify the confirmation email we just sent to:</p>
				<b className="text-black">{userInfo?.email}</b>
				<p>Click the confirmation link in that email to begin using Dribble.</p>
				<p>
					Didn't recieve the email? check your spam folder, it may have been caught
					by a filter. if
					<br /> you still dont see it, you can{" "}
					<b className="text-pink-active">resend the confirmation email.</b>
				</p>
				<p>
					wrong email address? <b className="text-pink-active">Change it</b>
				</p>
			</main>
			<Footer />
		</div>
	);
}

export default EmailConfirm;
