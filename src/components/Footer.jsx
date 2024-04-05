import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
	faTwitter,
	faFacebook,
	faInstagram,
	faPinterest,
	faDribbble,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
	return (
		<footer className="bg-gray-extralight flex-col px-8 gap-4 text-sm w-full">
			<div className="flex justify-between gap-8 flex-col lg:flex-row text-sm py-8">
				<div className="flex flex-col text-gray-dark gap-4">
					<span className="logo text-pink-active text-4xl font-bold">dribble</span>
					<p className="text-wrap">
						Dribble is world's leading
						<br />
						community for creative to share, grow
						<br />
						and get hired
					</p>
					<div className="flex gap-4">
						<Link to="">
							<FontAwesomeIcon icon={faTwitter} />
						</Link>
						<Link to="">
							<FontAwesomeIcon icon={faFacebook} />
						</Link>
						<Link to="">
							<FontAwesomeIcon icon={faInstagram} />
						</Link>
						<Link to="">
							<FontAwesomeIcon icon={faPinterest} />
						</Link>
						<Link to="">
							<FontAwesomeIcon icon={faDribbble} />
						</Link>
					</div>
				</div>
				<div className="flex flex-col sm:flex-wrap sm:flex-row sm:justify-between gap-8">
					<GroupedLinks
						heading="For designer"
						links={[
							"Go Pro!",
							"Explore design work",
							"Design blog",
							"Overtime podcast",
							"Playoffs",
							"Weekly Warm-Up",
							"Refer a Freind",
							"Code of Conduct",
						]}
					/>
					<div className="flex flex-col  gap-8">
						<GroupedLinks
							heading="Hire designder"
							links={[
								"Post a job opening",
								"Post a freelance project!",
								"Search for designer",
								"Overtime podcast",
							]}
						/>
						<GroupedLinks heading="Brands" links={["Advertise with us"]} />
					</div>
					<GroupedLinks
						heading="Company"
						links={[
							"About",
							"Careers",
							"Support",
							"Media Kit",
							"Testimonials",
							"API",
							"Terms of Service",
							"Privacy Policy",
							"Cookie Policy",
						]}
					/>
					<div className="flex flex-col gap-8">
						<GroupedLinks
							heading="Directories"
							links={[
								"Design jobs",
								"Design for hire",
								"Freelance designers for hire",
								"Tags",
								"Places",
							]}
						/>
						<GroupedLinks
							heading="Design assets"
							links={[
								"Dribble Marketplace",
								"Creative Market",
								"Fontspring",
								"Font Squirell",
							]}
						/>
					</div>
					<GroupedLinks
						heading="Design Resources"
						links={[
							"Freelancing",
							"Design Hiring",
							"Design Portfolio",
							"Design Education",
							"Creative Process",
							"Design Industry Trends",
						]}
					/>
				</div>
			</div>
			<hr className="hidden sm:block sm:border-gray-light border-2 " />
			<div className="text-gray-dark flex flex-col md:flex-row gap-2 text-center justify-between py-8">
				<span>© 2023 Dribble. All rights reserved.</span>
				<span>
					<b className="text-black">20,501,853</b> shots dribbled{" "}
					<FontAwesomeIcon className="text-pink-active" icon={faBasketball} />
				</span>
			</div>
		</footer>
	);
}

function GroupedLinks({ heading, links }) {
	return (
		<div className="flex flex-col gap-2 text-gray-dark border-b-2 sm:border-0 border-gray-light pb-4">
			<b className="">{heading}</b>
			{links.map((item, index) => (
				<Link key={index} to="#">
					{item}
				</Link>
			))}
		</div>
	);
}

export default Footer;
