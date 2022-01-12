import { AdvicesCardsView } from "../components/AdvicesCardsView";
import { cardsList } from "../config/cardsData";

import "../advices.scss";

export const AdvicesCardsContainer = () => {
	return (
		<div className="advices-cards">
			{cardsList.map((card, i) => 
				<AdvicesCardsView key={i} item={card} />
			)}
		</div>
	);
};
