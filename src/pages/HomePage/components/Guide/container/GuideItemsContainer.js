import { GuideItemsView } from "../components/GuideItemsView";
import { guideList } from "../config/guideListData";

import "../guide.scss";

export const GuideItemsContainer = () => {
	return (
		<div className="guide__items">
			{guideList.map((item) => (
				<GuideItemsView key={item.title} item={item} />
			))}
		</div>
	);
};
