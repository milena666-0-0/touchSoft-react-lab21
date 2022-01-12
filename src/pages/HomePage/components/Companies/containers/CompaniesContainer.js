import { CompaniesItemView } from "../components/CompaniesItemView";
import { companiesList } from "../config/companiesData";

import "../companies.scss";

export const CompaniesContainer = () => {
	return (
		<section className="companies">
			<div className="container">
				<div className="row companies__row">
					{companiesList.map((company, i) => (
						<CompaniesItemView key={i} item={company} />
					))}
				</div>
			</div>
		</section>
	);
};
