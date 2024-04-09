import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faTrash,
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
function Avatar() {
	const [formData, setFormData] = useState({
		image: "",
		location: "",
	});
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		navigate("/options");
	}
	const { setProfilePic } = useContext(DataContext);

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (!disabled) {
			return;
		}
		if (formData.image && formData.location) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [formData]);

	const fileInputRef = useRef(null);

	function handleImageUpload(e) {
		const image = e.target.files[0];

		const fileReader = new FileReader();
		fileReader.onload = function (e) {
			setFormData((prev) => ({ ...prev, image: e.target.result }));
			setProfilePic(e.target.result)
		};
		fileReader.readAsDataURL(image);
	}
	return (
		<section className="flex h-full p-8 flex-col gap-8">
			<div className="flex gap-3 items-center">
				<span className="logo font-bold text-4xl text-pink-active">dribble</span>
				<Link to="/login" className="bg-gray-light text-gray-base p-3 rounded-lg">
					<FontAwesomeIcon icon={faArrowLeft} />
				</Link>
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4 self-center justify-between grow"
			>
				<span className="text-2xl sm:text-3xl md:text-4xl font-bold">
					Welcome! Let's create your profile
				</span>
				<p className="text-gray-base">
					Let others get to know you better! You can do these later
				</p>

				<label className="font-bold mt-4" htmlFor="avatar">
					Add an avatar
				</label>
				<div className="flex flex-col sm:flex-row gap-8 items-center">
					{!formData.image ? (
						<label
							style={{ backgroundImage: "" }}
							className="cursor-pointer flex size-[140px] rounded-full items-center justify-center border-dashed border-2 border-gray-base text-gray-base"
							htmlFor="avatar"
						>
							<FontAwesomeIcon icon={faCamera} />
						</label>
					) : (
						<img
							className="size-[140px] border-dashed border-2 border-gray-base rounded-full object-cover"
							src={formData.image}
						/>
					)}
					<div className="flex items-center sm:items-start flex-col gap-4">
						<div className="flex gap-4">
							<label
								htmlFor="avatar"
								className="cursor-pointer w-fit font-semibold border-2 border-gray-light px-4 py-2 rounded-lg"
							>
								{!formData.image ? "Choose Image" : "Upload another image"}
							</label>
							{formData.image && (
								<button
									onClick={(e) => {
										setFormData((prev) => ({ ...prev, image: "" }));
										fileInputRef.current.value = "";
									}}
									className="text-gray-base font-semibold border-2 px-4 py-2 rounded-lg border-gray-light"
								>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							)}
						</div>
						<input
							type="file"
							className="absolute opacity-0 -z-10"
							id="avatar"
							name="avatar"
							accept="image/*"
							onChange={handleImageUpload}
							required
							ref={fileInputRef}
						/>
						<button className="text-gray-base text-start font-semibold">
							{"> or choose one of our defaults"}
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-4 mt-12">
					<label className="font-bold" htmlFor="location">
						Add your Location
					</label>
					<input
						className="text-gray-base border-3 border-b pb-2 outline-none"
						placeholder="Enter a location"
						id="location"
						name="location"
						required
						type="text"
						value={formData.location}
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, location: e.target.value }))
						}
					/>
				</div>

				<button
					type="submit"
					disabled={disabled}
					className={`${
						disabled ? "bg-pink-disable" : "bg-pink-active"
					} my-12 text-white py-2 w-[50%] rounded-md`}
				>
					Next
				</button>
			</form>
		</section>
	);
}

export default Avatar;
