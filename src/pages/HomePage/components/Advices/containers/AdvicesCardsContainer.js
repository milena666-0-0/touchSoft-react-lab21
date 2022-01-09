import { AdvicesCardsView } from "../components/AdvicesCardsView";

import "../advices.scss";

import pic1 from "../../../../../static/imgs/advices/pic1.png";
import pic2 from "../../../../../static/imgs/advices/pic2.png";

export const AdvicesCardsContainer = () => {

	const cardsList = [
		{
			pic: pic1,
			date: "May 3, 2021",
			title: "What is compounding?",
			desc: `Compounding is the art and science of preparing personalized
            medications.`,
		},
        {
			pic: pic2,
			date: "May 3, 2021",
			title: "What is compounding?",
			desc: `Compounding is the art and science of preparing personalized
            medications.`,
		},
	];

    const cards = cardsList.map((card, i) => {
        return <AdvicesCardsView key={i} item={card}/>
    });

    return(
        <div className="advices-cards">
			{cards}
		</div> 
    );
};

