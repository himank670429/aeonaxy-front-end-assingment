import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataContext } from "../context/DataContext";

import {
	faBriefcase,
	faSearch,
	faCircleXmark,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
	const [open, setOpen] = useState(false);
	const { userInfo } = useContext(DataContext);
	return (
		<>
			<nav className="flex gap-4 p-4 text-gray-base justify-between lg:justify-normal">
				<FontAwesomeIcon
					onClick={() => setOpen(true)}
					className="lg:hidden cursor-pointer self-center text-xl"
					icon={faBars}
				/>

				<span className="logo text-black font-bold text-4xl">dribble</span>

				{/* links */}
				<div className="hidden lg:flex items-center gap-8 text-sm">
					{[
						"inspiration",
						"Find Work",
						"Learn Design",
						"Go Pro",
						"Hire Designers",
					].map((item, index) => (
						<Link key={index}>{item}</Link>
					))}
				</div>

				{/* profile */}
				<div className="flex gap-4 items-center lg:ml-auto">
					{/* search */}
					<div className="flex p-2 rounded-lg items-center gap-2 bg-transparent lg:bg-gray-light">
						<FontAwesomeIcon className="" icon={faSearch} />
						<input
							className="bg-inherit w-[70px] hidden lg:block"
							type="text"
							id="search"
							placeholder="search"
						/>
					</div>

					{/* icon */}
					<div className="hidden lg:block relative">
						<FontAwesomeIcon fontSize={20} icon={faBriefcase} />
						<FontAwesomeIcon
							className="absolute bottom-[-2px] left-2 bg-white rounded-full border-[1px]"
							icon={faCircleXmark}
						/>
					</div>

					{/* profile */}
					<img
						src={userInfo.profile_pic}
						className="size-[30px] rounded-full object-cover"
					/>
					{/* upload */}
					<button className="hidden lg:block bg-pink-active text-white px-4 py-2 rounded-lg">
						upload
					</button>
				</div>
			</nav>
			{open ? (
				<div
					className={`${
						open ? "flex" : "hidden"
					} md:hidden flex-col divide-y-2 divide-gray-light  text-sm px-4`}
				>
					{[
						"inspiration",
						"Find Work",
						"Learn Design",
						"Go Pro",
						"Hire Designers",
					].map((item, index) => (
						<Link
							onClick={() => {
								setOpen(false);
							}}
							className="py-2 text-gray-base"
							key={index}
						>
							{item}
						</Link>
					))}
				</div>
			) : null}
		</>
	);
}

export default Navbar;
