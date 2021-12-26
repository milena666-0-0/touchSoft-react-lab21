import { AdvicesCards } from "../components/AdvicesCards";

import "../advices.scss";

export const AdvicesContainer = () => {
	return (
		<section className="advices">
			<div className="container">
				<div className="advices__title">In the Wild</div>
				<div className="advices__desc">
					In The Wild is a collection of pieces to help close the
					communication gap, while growing the love (and understanding)
					between you and your best pal.
				</div>
				<AdvicesCards />
				<div className="advices__more">
					<button className="advices__btn" type="">
						View more
					</button>
				</div>
			</div>
		</section>
	);
};
