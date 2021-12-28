import {GuideItems} from '../components/GuideItems';
import "../guide.scss";

export const GuideContainer = () => {
	return (
		<section className="guide">
			<div className="container">
				<div className="guide__title">How it works</div>
				<GuideItems/>
				<button className="guide__btn" type="">
					Learn More
				</button>
			</div>
		</section>
	);
};
