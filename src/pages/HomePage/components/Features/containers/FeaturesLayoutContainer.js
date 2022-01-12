import { FeaturesLayoutView } from "../components/FeaturesLayoutView";
import { featuresList } from "../config/featuresData";

import "../features.scss";

export const FeaturesLayoutContainer = () => {
	return (
		<div className="features__list">
			{featuresList.map((feature, i) => (
				<FeaturesLayoutView key={i} item={feature} />
			))}
		</div>
	);
};
