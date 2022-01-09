import {Button} from '../../../../components/Button/Button';

import "./petPharmacy.scss";

export const PetPharmacy = () => {
	return (
		<section className="pet-pharmacy">
			<div className="container">
				<div className="pet-pharmacy__title">
					The pet pharmacy humans are jealous of.
				</div>
				<div className="pet-pharmacy__info">
					5 stars on

					<span>

						<a className="pet-pharmacy__example" href="">

							Yelp

						</a>

					</span>

					,
					<span>

						<a className="pet-pharmacy__example" href="">

							Google

						</a>

					</span>

					and
					<span>

						<a className="pet-pharmacy__example" href="">
							
							Facebook

						</a>

					</span>
					because your best friend deserves only the best in pet care.
				</div>
				<Button width={156} height={48} label={'Try Mixlab'}/>
			</div>
		</section>
	);
};
