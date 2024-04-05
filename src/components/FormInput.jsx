import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function FormIpnut({
	label,
	placeholder,
	id,
	name,
	type,
	className,
	error,
}) {
	return (
		<div className={"flex flex-col gap-2 " + className}>
			<div className="flex gap-2 items-center">
				{error ? (
					<FontAwesomeIcon
						className="text-warning-dark"
						icon={faExclamationTriangle}
					/>
				) : null}
				<label className="font-bold" htmlFor={id}>
					{label}
				</label>
			</div>
			<input
				className={`${
					error
						? "bg-warning-light placeholder:text-warning-dark"
						: "bg-gray-light placeholder:text-gray-base"
				} rounded-md p-2 outline-none `}
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
}
