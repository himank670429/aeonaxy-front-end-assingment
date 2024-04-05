import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
function Options() {
	const [selectedOption, setSelectedOption] = useState([
		{
			img: "option1.png",
			text: "i'm a designer looking to share my work",
			selected: false,
		},
		{
			img: "option2.png",
			text: "i'm a designer looking to hire a designer",
			selected: false,
		},
		{
			img: "option3.png",
			text: "i'm a looking forward for design inspiration",
			selected: false,
		},
	]);
	const disabled = !Boolean(
		selectedOption.filter((item) => item.selected).length
	);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate("/confirm");
	}

	return (
		<div className="flex flex-col p-4 gap-8 h-full">
			<div className="flex gap-3 items-center">
				<span className="logo font-bold text-4xl text-pink-active">dribble</span>
				<Link to="/avatar" className="bg-gray-light text-gray-base p-3 rounded-lg">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Link>
			</div>
			<div className="flex flex-col gap-8">
				<p className="self-center text-center font-bold text-2xl sm:text-3xl md:text-4xl">
					What brings you to Dribble?
				</p>
				<p className="text-gray-base text-center">
					select the options that describe you. Dont worr, you can explore other
					options later.
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 items-center mt-12"
			>
				<div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center">
					{selectedOption.map((item, index) => (
						<OptionCard
							key={index}
							{...item}
							index={index}
							isSelected={selectedOption[index].selected}
							handleClick={(index) =>
								setSelectedOption((prev) => {
									const updated = structuredClone(prev);
									updated[index].selected = !updated[index].selected;
									return updated;
								})
							}
						/>
					))}
				</div>
				<p className="font-bold">
					{!disabled ? "Anything else? You can select multiple" : "​"}
				</p>
				<button
					disabled={disabled}
					className={`${
						disabled ? "bg-pink-disable" : "bg-pink-active"
					} text-white px-6 py-2 rounded-lg`}
				>
					finish
				</button>
				<p className="font-bold text-gray-base">
					{!disabled ? "or Press Enter" : "​"}
				</p>
			</form>
		</div>
	);
}

function OptionCard({ img, text, handleClick, index, isSelected }) {
	return (
		<div
			onClick={() => handleClick(index)}
			className={`flex flex-col border-2 min-w-[200px] max-w-[350px] p-4 rounded-lg gap-4 ${
				isSelected ? "border-pink-active" : "border-gray-light"
			}`}
		>
			<img src={img} />
			<b className="text-xl text-center ">{text}</b>

			{isSelected ? (
				<FontAwesomeIcon
					className="text-pink-active text-2xl"
					icon={faCircleCheck}
				/>
			) : (
				<div className="size-[1.5rem] border-2  rounded-full self-center" />
			)}
		</div>
	);
}

export default Options;
